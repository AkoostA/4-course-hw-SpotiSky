import "../../../css/style.css";
import sprite from "../../../img/icon/sprite.svg";

function PlayListTrack() {
  return (
    <div className="playlist__track track">
      <div className="track__title">
        <div className="track__title-image">
          <svg className="track__title-svg" alt="music">
            <use xlinkHref={`${sprite}#icon-note`} />
          </svg>
        </div>
        <div className="track__title-text">
          <a className="track__title-link" href="index.html">
            Guilt <span className="track__title-span" />
          </a>
        </div>
      </div>
      <div className="track__author">
        <a className="track__author-link" href="index.html">
          Nero
        </a>
      </div>
      <div className="track__album">
        <a className="track__album-link" href="index.html">
          Welcome Reality
        </a>
      </div>
      <div className="track__time">
        <svg className="track__time-svg" alt="time">
          <use xlinkHref={`${sprite}#icon-like`} />
        </svg>
        <span className="track__time-text">4:44</span>
      </div>
    </div>
  );
}

export default PlayListTrack;
