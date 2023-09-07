import style from "./centerBlockContent.module.css";
import ContentTitle from "../contentTitle/contentTitle";
import PlayListTrack from "../playListTrack/playListTrack";
import FavoritesPlayListTrack from "../../../pages/Favorites/FavoritesPlayListTrack/FavoritesPlayListTrack";

function CenterBlockContent({
  loading,
  getError,
  setOpenBar,
  setAudio,
  favorites,
}) {
  return (
    <div className={style.centerBlock__content}>
      <ContentTitle />
      {favorites ? (
        <FavoritesPlayListTrack
          loading={loading}
          getError={getError}
          setOpenBar={setOpenBar}
          setAudio={setAudio}
        />
      ) : (
        <PlayListTrack
          loading={loading}
          getError={getError}
          setOpenBar={setOpenBar}
          setAudio={setAudio}
        />
      )}
    </div>
  );
}

export default CenterBlockContent;
