import style from "./playBlock.module.css";
import PlayerControls from "../playerControls/playerControls";
import TrackPlay from "../trackPlay/trackPlay";
import BarVolume from "../barVolume/barVolume";

function PlayerBlock({ loading }) {
  return (
    <div className={style.bar__playerBlock}>
      <div className={style.bar__player}>
        <PlayerControls />
        <TrackPlay loading={loading} />
      </div>
      <BarVolume />
    </div>
  );
}

export default PlayerBlock;
