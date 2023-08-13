/* eslint-disable no-case-declarations */
import { useDispatch, useSelector } from "react-redux";
import style from "./playerControls.module.css";
import sprite from "../../../img/icon/sprite.svg";
import allTracksSelector, {
  activeTrackSelector,
  playTrackSelector,
} from "../../../store/selectors/selectors";
import {
  addActiveTrack,
  addPlayTrack,
} from "../../../store/actions/creators/creators";

function PlayerControls({ audioRef, repeat, setRepeat }) {
  const allTracks = useSelector(allTracksSelector);
  const playTrack = useSelector(playTrackSelector);
  const activeTrack = useSelector(activeTrackSelector);
  const dispatch = useDispatch();
  let index;

  const audioControl = (text) => {
    switch (text) {
      case "prev":
        index = allTracks.indexOf(playTrack);
        dispatch(addActiveTrack({ active: true }));
        if (index === 0) return;
        dispatch(addPlayTrack(allTracks[index - 1]));
        break;
      case "play":
        audioRef.current.play();
        dispatch(addActiveTrack({ active: true }));
        break;
      case "stop":
        audioRef.current.pause();
        dispatch(addActiveTrack({ active: false }));
        break;
      case "next":
        index = allTracks.indexOf(playTrack);
        dispatch(addActiveTrack({ active: true }));
        if (index === allTracks.length - 1) return;
        dispatch(addPlayTrack(allTracks[index + 1]));
        break;
      case "repeat":
        setRepeat(!repeat);
        break;
      case "shuffle":
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
          <use xlinkHref={`${sprite}#icon-shuffle`} />
        </svg>
      </button>
    </div>
  );
}
export default PlayerControls;
