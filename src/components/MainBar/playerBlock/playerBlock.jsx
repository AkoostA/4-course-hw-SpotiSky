import "../../../css/style.css";
import PlayerControls from "../playerControls/playerControls";
import TrackPlay from "../trackPlay/trackPlay";
import BarVolume from "../barVolume/barVolume";

function PlayerBlock({ loading }) {
  return (
    <div className="bar__player-block">
      <div className="bar__player player">
        <div className="player__controls">
          <PlayerControls logo="#icon-prev" />
          <PlayerControls logo="#icon-play" />
          <PlayerControls logo="#icon-next" />
          <PlayerControls logo="#icon-repeat" />
          <PlayerControls logo="#icon-shuffle" />
        </div>
        <TrackPlay loading={loading} />
      </div>
      <BarVolume />
    </div>
  );
}

export default PlayerBlock;
