import "../../css/style.css";
import CenterBlockSearch from "./centerBlockSearch/centerBlockSearch";
import FilterButton from "./filterButton/filterButton";
import CenterBlockContent from "./centerBlockContent/centerBlockContent";

function MainCenterBlock({ loading }) {
  return (
    <div className="main__centerBlock centerBlock">
      <CenterBlockSearch />
      <h2 className="centerBlock__h2">Треки</h2>
      <FilterButton />
      <CenterBlockContent loading={loading} />
    </div>
  );
}

export default MainCenterBlock;
