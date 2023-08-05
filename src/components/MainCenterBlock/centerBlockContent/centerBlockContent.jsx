import style from "./centerBlockContent.module.css";
import ContentTitle from "../contentTitle/contentTitle";
import PlayListTrack from "../playListTrack/playListTrack";

function CenterBlockContent({
  loading,
  allTrack,
  getError,
  setOpenBar,
  setTrack,
  setAudio,
  setPlay,
}) {
  return (
    <div className={style.centerBlock__content}>
      <ContentTitle />
      <PlayListTrack
        setPlay={setPlay}
        loading={loading}
        allTrack={allTrack}
        getError={getError}
        setOpenBar={setOpenBar}
        setTrack={setTrack}
        setAudio={setAudio}
      />
    </div>
  );
}

export default CenterBlockContent;
