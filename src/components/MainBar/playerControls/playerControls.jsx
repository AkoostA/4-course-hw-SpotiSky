/* eslint-disable no-param-reassign */
import { useDispatch, useSelector } from "react-redux";
import style from "./playerControls.module.css";
import sprite from "../../../img/icon/sprite.svg";
import allTracksSelector, {
  activeTrackSelector,
  shuffleTracksSelector,
} from "../../../store/selectors/selectors";
import {
  addActiveTrack,
  addPlayTrack,
  addShuffleTracks,
} from "../../../store/actions/creators/creators";

function PlayerControls({ audioRef, repeat, setRepeat }) {
  const allTracks = useSelector(allTracksSelector);
  const activeTrack = useSelector(activeTrackSelector);
  const shuffleTracks = useSelector(shuffleTracksSelector);
  const dispatch = useDispatch();

  const audioControl = (text) => {
    switch (text) {
      case "prev":
        if (audioRef.current.currentTime >= 5) {
          audioRef.current.currentTime = 0;
          return;
        }
        if (activeTrack.index === 0 || activeTrack.index === "shuffle") return;
        dispatch(
          addActiveTrack({
            ...activeTrack,
            active: true,
            index: activeTrack.index - 1,
          })
        );
        if (activeTrack.shuffle) {
          dispatch(addPlayTrack(shuffleTracks[activeTrack.index - 1]));
        } else {
          dispatch(addPlayTrack(allTracks[activeTrack.index - 1]));
        }
        break;
      case "play":
        audioRef.current.play();
        dispatch(addActiveTrack({ ...activeTrack, active: true }));
        break;
      case "stop":
        audioRef.current.pause();
        dispatch(addActiveTrack({ ...activeTrack, active: false }));
        break;
      case "next":
        if (activeTrack.index === allTracks.length - 1) return;
        if (activeTrack.index === "shuffle") {
          dispatch(addPlayTrack(shuffleTracks[0]));
          dispatch(
            addActiveTrack({
              ...activeTrack,
              active: true,
              index: 0,
            })
          );
          return;
        }
        dispatch(
          addActiveTrack({
            ...activeTrack,
            active: true,
            index: activeTrack.index + 1,
          })
        );
        if (activeTrack.shuffle) {
          dispatch(addPlayTrack(shuffleTracks[activeTrack.index + 1]));
        } else {
          dispatch(addPlayTrack(allTracks[activeTrack.index + 1]));
        }
        break;
      case "repeat":
        setRepeat(!repeat);
        break;
      case "shuffle":
        if (activeTrack.shuffle) {
          dispatch(addActiveTrack({ ...activeTrack, shuffle: false }));
        } else {
          dispatch(
            addActiveTrack({ ...activeTrack, shuffle: true, index: "shuffle" })
          );
          const newShuffleTracks = allTracks.map((track) => track);
          newShuffleTracks.sort(() => Math.random() - 0.5);
          dispatch(addShuffleTracks(newShuffleTracks));
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className={style.player__controls}>
      <button
        onClick={() => {
          audioControl("prev");
        }}
        type="button"
        className={style.player__btnPrev}
      >
        <svg className={style.player__btnPrevSvg} alt="prev">
          <use xlinkHref={`${sprite}#icon-prev`} />
        </svg>
      </button>
      <button
        onClick={() => {
          audioControl(activeTrack.active ? "stop" : "play");
        }}
        type="button"
        className={style.player__btnPlay}
      >
        <svg className={style.player__btnPlaySvg} alt="play">
          <use
            xlinkHref={
              activeTrack.active
                ? `${sprite}#icon-pause`
                : `${sprite}#icon-play`
            }
          />
        </svg>
      </button>
      <button
        onClick={() => {
          audioControl("next");
        }}
        type="button"
        className={style.player__btnNext}
      >
        <svg className={style.player__btnNextSvg} alt="next">
          <use xlinkHref={`${sprite}#icon-next`} />
        </svg>
      </button>
      <button
        onClick={() => {
          audioControl("repeat");
        }}
        type="button"
        className={style.player__btnRepeat}
      >
        <svg className={style.player__btnRepeatSvg} alt="repeat">
          <use
            xlinkHref={
              repeat ? `${sprite}#icon-repeatActive` : `${sprite}#icon-repeat`
            }
          />
        </svg>
      </button>
      <button
        onClick={() => {
          audioControl("shuffle");
        }}
        type="button"
        className={style.player__btnShuffle}
      >
        <svg className={style.player__btnShuffleSvg} alt="shuffle">
          <use
            xlinkHref={
              activeTrack.shuffle
                ? `${sprite}#icon-shuffleActive`
                : `${sprite}#icon-shuffle`
            }
          />
        </svg>
      </button>
    </div>
  );
}
export default PlayerControls;
