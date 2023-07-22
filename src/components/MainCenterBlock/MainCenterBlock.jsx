import style from "./MainCenterBlock.module.css";
import CenterBlockSearch from "./centerBlockSearch/centerBlockSearch";
import FilterButton from "./filterButton/filterButton";
import CenterBlockContent from "./centerBlockContent/centerBlockContent";

function MainCenterBlock({ loading, allTrack, getError, setOpenBar, setNameTrack, setAuthorTrack }) {
  return (
    <div className={style.main__centerBlock}>
      <CenterBlockSearch />
      <h2 className={style.centerBlock__title}>Треки</h2>
      <FilterButton />
      <CenterBlockContent
        loading={loading}
        allTrack={allTrack}
        getError={getError}
        setOpenBar={setOpenBar}
        setNameTrack={setNameTrack}
        setAuthorTrack={setAuthorTrack}
      />
    </div>
  );
}

export default MainCenterBlock;
