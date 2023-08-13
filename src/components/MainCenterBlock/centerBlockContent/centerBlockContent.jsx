import style from "./centerBlockContent.module.css";
import ContentTitle from "../contentTitle/contentTitle";
import PlayListTrack from "../playListTrack/playListTrack";

function CenterBlockContent({
  loading,
  getError,
  setOpenBar,
  setTrack,
  setAudio,
}) {
  return (
    <div className={style.centerBlock__content}>
      <ContentTitle />
      <PlayListTrack
        loading={loading}
        getError={getError}
        setOpenBar={setOpenBar}
        setTrack={setTrack}
        setAudio={setAudio}
      />
    </div>
  );
}

export default CenterBlockContent;
