import "../../../css/style.css";

function FilterButton({ toggleFilter, handleKeyDown, filter }) {
  return (
    <div className="centerBlock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div
        onClick={() => toggleFilter(1)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => handleKeyDown(event.key === "Enter" ? 1 : null)}
        className={`filter__button button-author _btn-text ${
          filter === 1 ? "active" : null
        }`}
      >
        исполнителю
      </div>
      <div
        onClick={() => toggleFilter(2)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => handleKeyDown(event.key === "Enter" ? 2 : null)}
        className={`filter__button button-author _btn-text ${
          filter === 2 ? "active" : null
        }`}
      >
        году выпуска
      </div>
      <div
        onClick={() => toggleFilter(3)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => handleKeyDown(event.key === "Enter" ? 3 : null)}
        className={`filter__button button-author _btn-text ${
          filter === 3 ? "active" : null
        }`}
      >
        жанру
      </div>
    </div>
  );
}

export default FilterButton;
