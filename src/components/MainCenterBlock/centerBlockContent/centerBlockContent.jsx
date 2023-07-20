import style from "./centerBlockContent.module.css";
import ContentTitle from "../contentTitle/contentTitle";
import PlayListTrack from "../playListTrack/playListTrack";

function CenterBlockContent({ loading, allTrack }) {
  return (
    <div className={style.centerBlock__content}>
      <ContentTitle />
      <PlayListTrack loading={loading} allTrack={allTrack} />
    </div>
  );
}

export default CenterBlockContent;
