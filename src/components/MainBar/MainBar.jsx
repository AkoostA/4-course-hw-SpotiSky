import "../../css/style.css";
import PlayerProgress from "./playerProgress/playerProgress";
import PlayerBlock from "./playerBlock/playerBlock";

function MainBar({ loading }) {
  return (
    <div className="bar__content">
      <PlayerProgress />
      <PlayerBlock loading={loading} />
    </div>
  );
}

export default MainBar;
