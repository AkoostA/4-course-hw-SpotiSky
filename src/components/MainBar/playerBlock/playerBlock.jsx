import style from "./playerBlock.module.css";
import PlayerControls from "../playerControls/playerControls";
import TrackPlay from "../trackPlay/trackPlay";
import BarVolume from "../barVolume/barVolume";

function PlayerBlock({
  loading,
  audioRef,
  setRepeat,
  repeat,
  track,
}) {
  return (
    <div className={style.bar__playerBlock}>
      <div className={style.bar__player}>
        <PlayerControls
          repeat={repeat}
          setRepeat={setRepeat}
          audioRef={audioRef}
        />
        <TrackPlay loading={loading} track={track} />
      </div>
      <BarVolume audioRef={audioRef} />
    </div>
  );
}

export default PlayerBlock;
