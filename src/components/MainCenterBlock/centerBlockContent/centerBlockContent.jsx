import style from "./centerBlockContent.module.css"
import ContentTitle from "../contentTitle/contentTitle";
import PlayListTrack from "../playListTrack/playListTrack";

function CenterBlockContent({ loading }) {
  return (
    <div className={style.centerBlock__content}>
      <ContentTitle />
      <PlayListTrack loading={loading} />
    </div>
  );
}

export default CenterBlockContent;
