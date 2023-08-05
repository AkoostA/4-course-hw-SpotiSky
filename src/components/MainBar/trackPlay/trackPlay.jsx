import style from "./trackPlay.module.css";
import Skeleton from "../../Skeleton";
import sprite from "../../../img/icon/sprite.svg";
import TrackLikeDis from "../trackLikeDis/trackLikeDis";

function TrackPlay({ loading, track }) {
  return (
    <div className={style.player__trackPlay}>
      {loading ? (
        <div className={style.trackPlay__contain}>
          <div className={style.trackPlay__image}>
            <Skeleton w="51px" h="51px" />
          </div>
          <div className={style.trackPlay__author}>
            <Skeleton w="59px" h="15px" />
          </div>
          <div className={style.trackPlay__album}>
            <Skeleton w="59px" h="15px" />
          </div>
        </div>
      ) : (
        <div className={style.trackPlay__contain}>
          <div className={style.trackPlay__image}>
            <svg className={style.trackPlay__svg} alt="music">
              <use xlinkHref={`${sprite}#icon-note`} />
            </svg>
          </div>
          <div className={style.trackPlay__author}>
            <button type="button" className={style.trackPlay__authorLink}>
              {track.name}
            </button>
          </div>
          <div className={style.trackPlay__album}>
            <button type="button" className={style.trackPlay__albumLink}>
              {track.author}
            </button>
          </div>
        </div>
      )}
      <TrackLikeDis />
    </div>
  );
}

export default TrackPlay;
