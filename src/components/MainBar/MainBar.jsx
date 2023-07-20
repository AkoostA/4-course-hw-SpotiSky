import style from "./MainBar.module.css";
import PlayerProgress from "./playerProgress/playerProgress";
import PlayerBlock from "./playerBlock/playerBlock";

function MainBar({ loading, openBar }) {
  return (
    <div className={style.bar__content}>
      <PlayerProgress />
      {openBar ? <PlayerBlock loading={loading} /> : null}
    </div>
  );
}

export default MainBar;
