import style from "./playerControls.module.css";
import sprite from "../../../img/icon/sprite.svg";

function PlayerControls({ audioRef, play, setPlay, repeat, setRepeat }) {
  const audioControl = (text) => {
    switch (text) {
      case "prev":
        alert("Данный функционал не реализован");
        break;
      case "play":
        audioRef.current.play();
        setPlay(true);
        break;
      case "stop":
        audioRef.current.pause();
        setPlay(false);
        break;
      case "next":
        alert("Данный функционал не реализован");
        break;
      case "repeat":
        setRepeat(!repeat);
        break;
      case "shuffle":
        alert("Данный функционал не реализован");
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
          audioControl(play ? "stop" : "play");
        }}
        type="button"
        className={style.player__btnPlay}
      >
        <svg className={style.player__btnPlaySvg} alt="play">
          <use
            xlinkHref={play ? `${sprite}#icon-pause` : `${sprite}#icon-play`}
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
