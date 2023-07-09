import style from "./MainBar.module.css";
import PlayerProgress from "./playerProgress/playerProgress";
import PlayerBlock from "./playerBlock/playerBlock";

function MainBar({ loading }) {
  return (
    <div className={style.bar__content}>
      <PlayerProgress />
      <PlayerBlock loading={loading} />
    </div>
  );
}

export default MainBar;
