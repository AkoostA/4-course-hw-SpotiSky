import style from "./playListTrack.module.css";
import Skeleton from "../../Skeleton";
import sprite from "../../../img/icon/sprite.svg";

function PlayListTrack({ loading }) {
  return (
    <div className={style.content__playlist}>
      <div className={style.playlist__item}>
        {loading ? (
          <div className={style.playlist__track}>
            <div className={style.track__title}>
              <div className={style.track__titleImage}>
                <Skeleton w="51px" h="51px" />
              </div>
              <div className={style.titleText}>
                <Skeleton w="356px" h="19px" />
              </div>
            </div>
            <div className={style.track__author}>
              <Skeleton w="271px" h="19px" />
            </div>
            <div className={style.track__album}>
              <Skeleton w="305px" h="19px" />
            </div>
            <div className={style.time}>
              <Skeleton w="60.8px" h="19px" />
            </div>
          </div>
        ) : (
          <div className={style.playlist__track}>
            <div className={style.track__title}>
              <div className={style.track__titleImage}>
                <svg className={style.track__titleSvg} alt="music">
                  <use xlinkHref={`${sprite}#icon-note`} />
                </svg>
              </div>
              <div className={style.titleText}>
                <a className={style.track__titleLink} href="index.html">
                  Guilt <span className={style.track__titleSpan} />
                </a>
              </div>
            </div>
            <div className={style.track__author}>
              <a className={style.track__authorLink} href="index.html">
                Nero
              </a>
            </div>
            <div className={style.track__album}>
              <a className={style.track__albumLink} href="index.html">
                Welcome Reality
              </a>
            </div>
            <div className={style.time}>
              <svg className={style.track__timeSvg} alt="time">
                <use xlinkHref={`${sprite}#icon-like`} />
              </svg>
              <span className={style.track__timeText}>4:44</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PlayListTrack;
