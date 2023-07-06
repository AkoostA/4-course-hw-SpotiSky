import "../../../css/style.css";
import sprite from "../../../img/icon/sprite.svg";

function TrackLikeDis() {
  return (
    <div className="track-play__like-dis">
      <div className="track-play__like _btn-icon">
        <svg className="track-play__like-svg" alt="like">
          <use xlinkHref={`${sprite}#icon-like`} />
        </svg>
      </div>
      <div className="track-play__dislike _btn-icon">
        <svg className="track-play__dislike-svg" alt="dislike">
          <use xlinkHref={`${sprite}#icon-dislike`} />
        </svg>
      </div>
    </div>
  );
}

export default TrackLikeDis;
