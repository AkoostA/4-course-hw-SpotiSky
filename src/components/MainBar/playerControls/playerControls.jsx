import style from "./playerControls.module.css";
import sprite from "../../../img/icon/sprite.svg";

function PlayerControls() {
  return (
    <div className={style.player__controls}>
      <div className={style.player__btnPrev}>
        <svg className={style.player__btnPrevSvg} alt="prev">
          <use xlinkHref={`${sprite}#icon-prev`} />
        </svg>
      </div>
      <div className={style.player__btnPlay}>
        <svg className={style.player__btnPlaySvg} alt="play">
          <use xlinkHref={`${sprite}#icon-play`} />
        </svg>
      </div>
      <div className={style.player__btnNext}>
        <svg className={style.player__btnNextSvg} alt="next">
          <use xlinkHref={`${sprite}#icon-next`} />
        </svg>
      </div>
      <div className={style.player__btnRepeat}>
        <svg className={style.player__btnRepeatSvg} alt="repeat">
          <use xlinkHref={`${sprite}#icon-repeat`} />
        </svg>
      </div>
      <div className={style.player__btnShuffle}>
        <svg className={style.player__btnShuffleSvg} alt="shuffle">
          <use xlinkHref={`${sprite}#icon-shuffle`} />
        </svg>
      </div>
    </div>
  );
}
export default PlayerControls;
