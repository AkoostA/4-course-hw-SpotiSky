import { useDispatch, useSelector } from "react-redux";
import {
  addActiveTrack,
  addPlayTrack,
} from "../../../store/actions/creators/creators";
import {
  activeTrackSelector,
  favoritesTracksSelector,
  playTrackSelector,
} from "../../../store/selectors/selectors";
import sprite from "../../../img/icon/sprite.svg";
import Skeleton from "../../../components/Skeleton";
import formatTime from "../../../components/Helper/Helper";
import S from "./FavoritesPlayListTrack.module.css";

export default function FavoritesPlayListTrack({ loading, getError }) {
  const favoritesTracks = useSelector(favoritesTracksSelector);
  const playTrack = useSelector(playTrackSelector);
  const activeTrack = useSelector(activeTrackSelector);
  const dispatch = useDispatch();

  const toggleTrack = (i) => {
    dispatch(addActiveTrack({ ...activeTrack, active: true, index: i }));
    dispatch(addPlayTrack(favoritesTracks[i]));
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
                <svg className={S.track__timeSvg} alt="time">
                  <use xlinkHref={`${sprite}#icon-like`} />
                </svg>
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
