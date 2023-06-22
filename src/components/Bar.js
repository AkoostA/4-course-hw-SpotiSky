import "../css/style.css";
import iconPrev from "../img/icon/prev.svg"
import iconPlay from "../img/icon/play.svg"
import iconNext from "../img/icon/next.svg"
import iconRepeat from "../img/icon/repeat.svg"
import iconShuffle from "../img/icon/shuffle.svg"
import iconNote from "../img/icon/note.svg"
import iconLike from "../img/icon/like.svg"
import iconDislike from "../img/icon/dislike.svg"
import iconVolume from "../img/icon/volume.svg"

const barPlayerProgress = <div className="bar__player-progress" />;

const barPlayer = (
  <div className="bar__player player">
    <div className="player__controls">
      <div className="player__btn-prev">
        <svg className="player__btn-prev-svg" alt="prev">
          <use xlinkHref={iconPrev} />
        </svg>
      </div>
      <div className="player__btn-play _btn">
        <svg className="player__btn-play-svg" alt="play">
          <use xlinkHref={iconPlay} />
        </svg>
      </div>
      <div className="player__btn-next">
        <svg className="player__btn-next-svg" alt="next">
          <use xlinkHref={iconNext} />
        </svg>
      </div>
      <div className="player__btn-repeat _btn-icon">
        <svg className="player__btn-repeat-svg" alt="repeat">
          <use xlinkHref={iconRepeat} />
        </svg>
      </div>
      <div className="player__btn-shuffle _btn-icon">
        <svg className="player__btn-shuffle-svg" alt="shuffle">
          <use xlinkHref={iconShuffle} />
        </svg>
      </div>
    </div>
    <div className="player__track-play track-play">
      <div className="track-play__contain">
        <div className="track-play__image">
          <svg className="track-play__svg" alt="music">
            <use xlinkHref={iconNote} />
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
      <div className="track-play__like-dis">
        <div className="track-play__like _btn-icon">
          <svg className="track-play__like-svg" alt="like">
            <use xlinkHref={iconLike} />
          </svg>
        </div>
        <div className="track-play__dislike _btn-icon">
          <svg className="track-play__dislike-svg" alt="dislike">
            <use xlinkHref={iconDislike} />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

const barVolume = (
  <div className="bar__volume-block volume">
    <div className="volume__content">
      <div className="volume__image">
        <svg className="volume__svg" alt="volume">
          <use xlinkHref={iconVolume} />
        </svg>
      </div>
      <div className="volume__progress _btn">
        <input
          className="volume__progress-line _btn"
          type="range"
          name="range"
        />
      </div>
    </div>
  </div>
);

function Bar() {
  return (
    <div className="bar__content">
      {barPlayerProgress}
      <div className="bar__player-block">
        {barPlayer}
        {barVolume}
      </div>
    </div>
  );
}

export default Bar;
