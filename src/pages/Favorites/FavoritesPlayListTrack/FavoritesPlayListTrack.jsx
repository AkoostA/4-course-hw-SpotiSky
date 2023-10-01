import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  addActiveTrack,
  addFavoritesTracks,
  addPlayTrack,
  addToken,
} from "../../../store/actions/creators/creators";
import {
  activeTrackSelector,
  favoritesTracksSelector,
  playTrackSelector,
  tokenSelector,
} from "../../../store/selectors/selectors";
import sprite from "../../../img/icon/sprite.svg";
import Skeleton from "../../../components/Skeleton";
import formatTime from "../../../components/Helper/Helper";
import S from "./FavoritesPlayListTrack.module.css";
import { disLike, getFavoritesTracks, refreshToken } from "../../../api/Api";

export default function FavoritesPlayListTrack({ loading, getError }) {
  const [disabled, setDisabled] = useState(false);
  const token = useSelector(tokenSelector);
  const favoritesTracks = useSelector(favoritesTracksSelector);
  const playTrack = useSelector(playTrackSelector);
  const activeTrack = useSelector(activeTrackSelector);
  const dispatch = useDispatch();

  const toggleTrack = (i) => {
    dispatch(addActiveTrack({ ...activeTrack, active: true, index: i }));
    dispatch(addPlayTrack(favoritesTracks[i]));
  };

  const toggleLike = async (track) => {
    try {
      setDisabled(true);
      await disLike({ token: token.access, id: track.id });
      const response = await getFavoritesTracks(token.access);
      dispatch(addFavoritesTracks(response));
    } catch (error) {
      if (error.message === "Токен протух") {
        const newAccess = await refreshToken(token.refresh);
        dispatch(addToken({ ...token, access: newAccess.access }));
        await disLike({ token: token.access, id: track.id });
        const response = await getFavoritesTracks(newAccess.access);
        dispatch(addFavoritesTracks(response));
        return;
      }
    } finally {
      setDisabled(false);
    }
  };

  if (getError) {
    return (
      <div className={S.content__playlist}>
        <div className={S.playlist__item}>
          <div className={S.playlist__track}>
            <h1>{getError}</h1>
          </div>
        </div>
      </div>
    );
  }

  if (!favoritesTracks[0]) {
    return (
      <div className={S.content__playlist}>
        <div className={S.playlist__item}>
          <div className={S.playlist__track}>
            <h1>В этом плейлисте нет треков</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={S.content__playlist}>
      <div className={S.playlist__item}>
        {loading ? (
          <div className={S.playlist__track}>
            <div className={S.track__title}>
              <div className={S.track__titleImage}>
                <Skeleton w="51px" h="51px" />
              </div>
              <div className={S.titleText}>
                <Skeleton w="356px" h="19px" />
              </div>
            </div>
            <div className={S.track__author}>
              <Skeleton w="271px" h="19px" />
            </div>
            <div className={S.track__album}>
              <Skeleton w="305px" h="19px" />
            </div>
            <div className={S.time}>
              <Skeleton w="60.8px" h="19px" />
            </div>
          </div>
        ) : (
          favoritesTracks.map((track, index) => (
            <div key={track.id} className={S.playlist__track}>
              <div className={S.track__title}>
                <div className={S.track__titleImage}>
                  {track.id === playTrack.id ? (
                    <div
                      className={
                        activeTrack.active
                          ? S.track__Active
                          : S.track__nonActive
                      }
                    />
                  ) : (
                    <svg className={S.track__titleSvg} alt="music">
                      <use xlinkHref={`${sprite}#icon-note`} />
                    </svg>
                  )}
                </div>
                <div className={S.titleText}>
                  <button
                    type="button"
                    onClick={() => toggleTrack(index)}
                    className={S.track__titleLink}
                  >
                    {track.name} <span className={S.track__titleSpan} />
                  </button>
                </div>
              </div>
              <div className={S.track__author}>
                <button
                  type="button"
                  onClick={() => toggleTrack(index)}
                  className={S.track__authorLink}
                >
                  {track.author}
                </button>
              </div>
              <div className={S.track__album}>
                <button
                  type="button"
                  onClick={() => toggleTrack(index)}
                  className={S.track__albumLink}
                >
                  {track.album}
                </button>
              </div>
              <div className={S.time}>
                <button
                  disabled={disabled}
                  onClick={() => toggleLike(track)}
                  type="button"
                  className={S.track__buttonLike}
                >
                  <svg className={S.track__timeSvg} alt="time">
                    <use xlinkHref={`${sprite}#icon-likeActive`} />
                  </svg>
                </button>
                <span className={S.track__timeText}>
                  {formatTime(track.duration_in_seconds)}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
