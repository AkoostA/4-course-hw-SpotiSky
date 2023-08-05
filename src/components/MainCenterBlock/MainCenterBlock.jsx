import style from "./MainCenterBlock.module.css";
import CenterBlockSearch from "./centerBlockSearch/centerBlockSearch";
import FilterButton from "./filterButton/filterButton";
import CenterBlockContent from "./centerBlockContent/centerBlockContent";

function MainCenterBlock({
  loading,
  allTrack,
  getError,
  setOpenBar,
  setAudio,
  setPlay,
  setTrack,
}) {
  return (
    <div className={style.main__centerBlock}>
      <CenterBlockSearch />
      <h2 className={style.centerBlock__title}>Треки</h2>
      <FilterButton />
      <CenterBlockContent
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

export default MainCenterBlock;
