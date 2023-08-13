import { useDispatch, useSelector } from "react-redux";
import S from "./playListTrack.module.css";
import sprite from "../../../img/icon/sprite.svg";
import Skeleton from "../../Skeleton";
import {
  addActiveTrack,
  addPlayTrack,
} from "../../../store/actions/creators/creators";
import allTracksSelector, {
  activeTrackSelector,
  playTrackSelector,
} from "../../../store/selectors/selectors";

function PlayListTrack({ loading, getError }) {
  const allTrack = useSelector(allTracksSelector);
  const playTrack = useSelector(playTrackSelector);
  const activeTrack = useSelector(activeTrackSelector);
  const dispatch = useDispatch();

  const toggleTrack = (track) => {
    dispatch(addPlayTrack(track));
    dispatch(addActiveTrack({active: true}));
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
          allTrack.map((track) => (
            <div key={track.id} className={S.playlist__track}>
              <div className={S.track__title}>
                <div className={S.track__titleImage}>
                  {track.id === playTrack.id ? (
                    <div
                      className={
                        activeTrack.active ? S.track__Active : S.track__nonActive
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
                    onClick={() => toggleTrack(track)}
                    className={S.track__titleLink}
                  >
                    {track.name} <span className={S.track__titleSpan} />
                  </button>
                </div>
              </div>
              <div className={S.track__author}>
                <button
                  type="button"
                  onClick={() => toggleTrack(track)}
                  className={S.track__authorLink}
                >
                  {track.author}
                </button>
              </div>
              <div className={S.track__album}>
                <button
                  type="button"
                  onClick={() => toggleTrack(track)}
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
                  {track.duration_in_seconds}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default PlayListTrack;
