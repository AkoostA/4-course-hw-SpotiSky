/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useState } from "react";
import style from "./playerProgress.module.css";

function PlayerProgress({ audioRef }) {
  const [value, setValue] = useState("1");
  const [duration, setDuration] = useState("0");

  const formatTime = (valueInDuration) => {
    const min = Math.floor(valueInDuration / 60);
    const sec = `0${valueInDuration % 60}`.slice(-2);
    return `${min}:${sec}`;
  };

  const toggleProgress = (e) => {
    audioRef.current.currentTime = e.target.value;
  };

  useEffect(() => {
    if (audioRef?.current.duration) {
      setDuration(audioRef.current.duration);
    }
  }, [audioRef.current.duration]);

  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", () => {
      setValue(audioRef.current.currentTime);
      return () => {
        audioRef.current.removeEventListener("timeupdate", () => {
          setValue(audioRef.current.currentTime);
        });
      };
    });
  });

  return (
    <>
      <input
        className={`${style.bar__playerProgress} _btn`}
        onInput={(e) => toggleProgress(e)}
        type="range"
        id="volume"
        min="0"
        max={duration}
        value={value}
        step="0.01"
      />
      <div className={style.bar__time}>
        {formatTime(Math.floor(value))}/{formatTime(Math.floor(duration))}
      </div>
    </>
  );
}

export default PlayerProgress;
