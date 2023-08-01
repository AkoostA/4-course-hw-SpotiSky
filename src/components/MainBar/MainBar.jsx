import style from "./MainBar.module.css";
import PlayerProgress from "./playerProgress/playerProgress";
import PlayerBlock from "./playerBlock/playerBlock";

function MainBar({
  loading,
  play,
  setPlay,
  audioRef,
  repeat,
  setRepeat,
  track,
}) {
  return (
    <div className={style.bar__content}>
      <PlayerProgress audioRef={audioRef} play={play} />
      <PlayerBlock
        repeat={repeat}
        setRepeat={setRepeat}
        audioRef={audioRef}
        play={play}
        setPlay={setPlay}
        loading={loading}
        track={track}
      />
    </div>
  );
}

export default MainBar;
