import style from "./centerBlockContent.module.css";
import ContentTitle from "../contentTitle/contentTitle";
import PlayListTrack from "../playListTrack/playListTrack";

function CenterBlockContent({ loading, allTrack, getError, setOpenBar }) {
  return (
    <div className={style.centerBlock__content}>
      <ContentTitle />
      <PlayListTrack
        loading={loading}
        allTrack={allTrack}
        getError={getError}
        setOpenBar={setOpenBar}
      />
    </div>
  );
}

export default CenterBlockContent;
