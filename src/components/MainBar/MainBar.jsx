import "../../css/style.css";
import BarProgress from "./playerProgress/playerProgress";
import PlayerBlock from "./playerBlock/playerBlock";

function MainBar({ loading }) {
  return (
    <div className="bar__content">
      <BarProgress />
      <PlayerBlock loading={loading} />
    </div>
  );
}

export default MainBar;
