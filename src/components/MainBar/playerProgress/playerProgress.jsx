/* eslint-disable jsx-a11y/media-has-caption */
import style from "./playerProgress.module.css";

function PlayerProgress({ audio }) {
  return (
    <>
      <audio src={audio} autoPlay controls />
      <div className={style.bar__playerProgress} />
    </>
  );
}

export default PlayerProgress;
