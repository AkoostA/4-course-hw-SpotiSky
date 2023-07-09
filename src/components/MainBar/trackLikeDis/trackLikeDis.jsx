import style from "./trackLikeDis.module.css";
import sprite from "../../../img/icon/sprite.svg";

function TrackLikeDis() {
  return (
    <div className={style.trackPlay__likeDis}>
      <div className={`${style.trackPlay__like} _btn-icon`}>
        <svg className={style.trackPlay__likeSvg} alt="like">
          <use xlinkHref={`${sprite}#icon-like`} />
        </svg>
      </div>
      <div className={`${style.trackPlay__dislike} _btn-icon`}>
        <svg className={style.trackPlay__dislikeSvg} alt="dislike">
          <use xlinkHref={`${sprite}#icon-dislike`} />
        </svg>
      </div>
    </div>
  );
}

export default TrackLikeDis;
