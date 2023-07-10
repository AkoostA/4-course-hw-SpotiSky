import style from "./barVolume.module.css";
import sprite from "../../../img/icon/sprite.svg";

function BarVolume() {
  return (
    <div className={style.bar__volumeBlock}>
      <div className={style.volume__content}>
        <div className={style.volume__image}>
          <svg className={style.volume__svg} alt="volume">
            <use xlinkHref={`${sprite}#icon-volume`} />
          </svg>
        </div>
        <div className={`${style.volume__progress} _btn`}>
          <input
            className={`${style.volume__progressLine} _btn`}
            type="range"
            name="range"
          />
        </div>
      </div>
    </div>
  );
}

export default BarVolume;
