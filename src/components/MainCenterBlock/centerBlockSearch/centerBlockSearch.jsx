import "../../../css/style.css";
import sprite from "../../../img/icon/sprite.svg";

function CenterBlockSearch() {
  return (
    <div className="centerBlock__search search">
      <svg className="search__svg" alt="search">
        <use xlinkHref={`${sprite}#icon-search`} />
      </svg>
      <input
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  );
}

export default CenterBlockSearch;
