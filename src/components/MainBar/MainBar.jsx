import style from "./MainBar.module.css";
import PlayerProgress from "./playerProgress/playerProgress";
import PlayerBlock from "./playerBlock/playerBlock";

function MainBar({ loading, openBar, nameTrack, authorTrack, audio }) {
  return (
    <div className={style.bar__content}>
      <PlayerProgress audio={audio} />
      {openBar ? (
        <PlayerBlock
          loading={loading}
          nameTrack={nameTrack}
          authorTrack={authorTrack}
        />
      ) : null}
    </div>
  );
}

export default MainBar;
