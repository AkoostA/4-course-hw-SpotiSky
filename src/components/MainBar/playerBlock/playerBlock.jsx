import style from "./playBlock.module.css";
import PlayerControls from "../playerControls/playerControls";
import TrackPlay from "../trackPlay/trackPlay";
import BarVolume from "../barVolume/barVolume";

function PlayerBlock({ loading, nameTrack, authorTrack }) {
  return (
    <div className={style.bar__playerBlock}>
      <div className={style.bar__player}>
        <PlayerControls />
        <TrackPlay loading={loading} nameTrack={nameTrack} authorTrack={authorTrack} />
      </div>
      <BarVolume />
    </div>
  );
}

export default PlayerBlock;
