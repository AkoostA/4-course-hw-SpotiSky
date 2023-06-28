import "../css/style.css";
import Skeleton from "./Skeleton";
import sprite from "../img/icon/sprite.svg";

const barPlayerProgress = <div className="bar__player-progress" />;

const playerPrev = (
  <div className="player__btn-prev">
    <svg className="player__btn-prev-svg" alt="prev">
      <use xlinkHref={`${sprite}#icon-prev`} />
    </svg>
  </div>
);

const playerPlay = (
  <div className="player__btn-play _btn">
    <svg className="player__btn-play-svg" alt="play">
      <use xlinkHref={`${sprite}#icon-play`} />
    </svg>
  </div>
);

const playerNext = (
  <div className="player__btn-next">
    <svg className="player__btn-next-svg" alt="next">
      <use xlinkHref={`${sprite}#icon-next`} />
    </svg>
  </div>
);

const playerRepeat = (
  <div className="player__btn-repeat _btn-icon">
    <svg className="player__btn-repeat-svg" alt="repeat">
      <use xlinkHref={`${sprite}#icon-repeat`} />
    </svg>
  </div>
);

const playerShuffle = (
  <div className="player__btn-shuffle _btn-icon">
    <svg className="player__btn-shuffle-svg" alt="shuffle">
      <use xlinkHref={`${sprite}#icon-shuffle`} />
    </svg>
  </div>
);

const trackNote = (
  <div className="track-play__image">
    <svg className="track-play__svg" alt="music">
      <use xlinkHref={`${sprite}#icon-note`} />
    </svg>
  </div>
);

const trackAuthor = (
  <div className="track-play__author">
    <a className="track-play__author-link" href="index.html">
      Ты та...
    </a>
  </div>
);

const trackAlbum = (
  <div className="track-play__album">
    <a className="track-play__album-link" href="index.html">
      Баста
    </a>
  </div>
);

const trackPlayLike = (
  <div className="track-play__like _btn-icon">
    <svg className="track-play__like-svg" alt="like">
      <use xlinkHref={`${sprite}#icon-like`} />
    </svg>
  </div>
);

const trackPlayDislike = (
  <div className="track-play__dislike _btn-icon">
    <svg className="track-play__dislike-svg" alt="dislike">
      <use xlinkHref={`${sprite}#icon-dislike`} />
    </svg>
  </div>
);

const barVolume = (
  <div className="bar__volume-block volume">
    <div className="volume__content">
      <div className="volume__image">
        <svg className="volume__svg" alt="volume">
          <use xlinkHref={`${sprite}#icon-volume`} />
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

function Bar({ loading }) {
  return (
    <div className="bar__content">
      {barPlayerProgress}
      <div className="bar__player-block">
        <div className="bar__player player">
          <div className="player__controls">
            {playerPrev}
            {playerPlay}
            {playerNext}
            {playerRepeat}
            {playerShuffle}
          </div>
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
                {trackNote}
                {trackAuthor}
                {trackAlbum}
              </div>
            )}
            <div className="track-play__like-dis">
              {trackPlayLike}
              {trackPlayDislike}
            </div>
          </div>
        </div>
        {barVolume}
      </div>
    </div>
  );
}

export default Bar;
