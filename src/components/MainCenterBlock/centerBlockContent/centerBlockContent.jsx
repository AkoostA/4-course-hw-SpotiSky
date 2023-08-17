import style from "./centerBlockContent.module.css";
import ContentTitle from "../contentTitle/contentTitle";
import PlayListTrack from "../playListTrack/playListTrack";

function CenterBlockContent({
  loading,
  getError,
  setOpenBar,
  setAudio,
}) {
  return (
    <div className={style.centerBlock__content}>
      <ContentTitle />
      <PlayListTrack
        loading={loading}
        getError={getError}
        setOpenBar={setOpenBar}
        setAudio={setAudio}
      />
    </div>
  );
}

export default CenterBlockContent;
