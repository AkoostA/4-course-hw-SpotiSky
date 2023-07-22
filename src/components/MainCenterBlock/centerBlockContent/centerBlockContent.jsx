import style from "./centerBlockContent.module.css";
import ContentTitle from "../contentTitle/contentTitle";
import PlayListTrack from "../playListTrack/playListTrack";

function CenterBlockContent({ loading, allTrack, getError, setOpenBar, setNameTrack, setAuthorTrack, setAudio }) {
  return (
    <div className={style.centerBlock__content}>
      <ContentTitle />
      <PlayListTrack
        loading={loading}
        allTrack={allTrack}
        getError={getError}
        setOpenBar={setOpenBar}
        setNameTrack={setNameTrack}
        setAuthorTrack={setAuthorTrack}
        setAudio={setAudio}
      />
    </div>
  );
}

export default CenterBlockContent;
