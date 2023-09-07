import style from "./MainCenterBlock.module.css";
import CenterBlockSearch from "./centerBlockSearch/centerBlockSearch";
import FilterButton from "./filterButton/filterButton";
import CenterBlockContent from "./centerBlockContent/centerBlockContent";

function MainCenterBlock({
  loading,
  getError,
  setOpenBar,
  setAudio,
  favorites,
}) {
  return (
    <div className={style.main__centerBlock}>
      <CenterBlockSearch />
      <h2 className={style.centerBlock__title}>{favorites ? "Мой плейлист" : "Треки"}</h2>
      <FilterButton />
      <CenterBlockContent
        favorites={favorites}
        loading={loading}
        getError={getError}
        setOpenBar={setOpenBar}
        setAudio={setAudio}
      />
    </div>
  );
}

export default MainCenterBlock;
