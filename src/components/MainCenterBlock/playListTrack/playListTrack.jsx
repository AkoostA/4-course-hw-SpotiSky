import style from "./playListTrack.module.css";
import sprite from "../../../img/icon/sprite.svg";
import Skeleton from "../../Skeleton";

function PlayListTrack({
  loading,
  allTrack,
  getError,
  setOpenBar,
  setNameTrack,
  setAuthorTrack,
  setAudio,
}) {
  const toggleNameAndAuthor = ({ name, author, audio }) => {
    setOpenBar(true);
    setNameTrack(name);
    setAuthorTrack(author);
    setAudio(audio);
  };

  if (getError) {
    return (
      <div className={style.content__playlist}>
        <div className={style.playlist__item}>
          <div className={style.playlist__track}>
            <h1>{getError}</h1>
          </div>
        </div>
      </div>
    );
  }

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
          allTrack.map((track) => (
            <div key={track.id} className={style.playlist__track}>
              <div className={style.track__title}>
                <div className={style.track__titleImage}>
                  <svg className={style.track__titleSvg} alt="music">
                    <use xlinkHref={`${sprite}#icon-note`} />
                  </svg>
                </div>
                <div className={style.titleText}>
                  <button
                    type="button"
                    onClick={() =>
                      toggleNameAndAuthor({
                        name: track.name,
                        author: track.author,
                        audio: track.track_file,
                      })
                    }
                    className={style.track__titleLink}
                  >
                    {track.name} <span className={style.track__titleSpan} />
                  </button>
                </div>
              </div>
              <div className={style.track__author}>
                <button
                  type="button"
                  onClick={() =>
                    toggleNameAndAuthor({
                      name: track.name,
                      author: track.author,
                      audio: track.track_file,
                    })
                  }
                  className={style.track__authorLink}
                  href="index.html"
                >
                  {track.author}
                </button>
              </div>
              <div className={style.track__album}>
                <button
                  type="button"
                  onClick={() =>
                    toggleNameAndAuthor({
                      name: track.name,
                      author: track.author,
                      audio: track.track_file,
                    })
                  }
                  className={style.track__albumLink}
                  href="index.html"
                >
                  {track.album}
                </button>
              </div>
              <div className={style.time}>
                <svg className={style.track__timeSvg} alt="time">
                  <use xlinkHref={`${sprite}#icon-like`} />
                </svg>
                <span className={style.track__timeText}>
                  {track.duration_in_seconds}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default PlayListTrack;
