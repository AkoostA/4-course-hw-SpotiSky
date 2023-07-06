import "../../../css/style.css";
import Skeleton from "../../Skeleton";
import sprite from "../../../img/icon/sprite.svg";
import TrackLikeDis from "../trackLikeDis/trackLikeDis";

function TrackPlay({ loading }) {
  return (
    <div className="player__track-play track-play">
      {loading ? (
        <div className="track-play__contain">
          <div className="track-play__image">
            <Skeleton w="51px" h="51px" />
          </div>
          <div className="track-play__author">
            <Skeleton w="59px" h="15px" />
          </div>
          <div className="track-play__album">
            <Skeleton w="59px" h="15px" />
          </div>
        </div>
      ) : (
        <div className="track-play__contain">
          <div className="track-play__image">
            <svg className="track-play__svg" alt="music">
              <use xlinkHref={`${sprite}#icon-note`} />
            </svg>
          </div>
          <div className="track-play__author">
            <a className="track-play__author-link" href="index.html">
              Ты та...
            </a>
          </div>
          <div className="track-play__album">
            <a className="track-play__album-link" href="index.html">
              Баста
            </a>
          </div>
        </div>
      )}
      <TrackLikeDis />
    </div>
  );
}

export default TrackPlay;
