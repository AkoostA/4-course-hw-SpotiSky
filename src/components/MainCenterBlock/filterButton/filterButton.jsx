import "../../../css/style.css";
import { useState } from "react";
import FilterListPerformer from "../filterListPerformer/filterListPerformer";
import FilterListYear from "../filterListYear/filterListYear";
import FilterListGenre from "../filerListGenre/filterListGenre";

function FilterButton() {
  const [filter, setFilter] = useState(0);
  const toggleFilter = (id) => setFilter(filter === id ? 0 : id);

  const handleKeyDown = (numb) => toggleFilter(numb);

  return (
    <div className="centerBlock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div className="filter__box">
        <div>
          <div
            onClick={() => toggleFilter(1)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) =>
              handleKeyDown(event.key === "Enter" ? 1 : null)
            }
            className={`filter__button button-author _btn-text ${
              filter === 1 ? "active" : null
            }`}
          >
            исполнителю
          </div>
          {filter === 1 ? <FilterListPerformer /> : null}
        </div>
        <div>
          <div
            onClick={() => toggleFilter(2)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) =>
              handleKeyDown(event.key === "Enter" ? 2 : null)
            }
            className={`filter__button button-author _btn-text ${
              filter === 2 ? "active" : null
            }`}
          >
            году выпуска
          </div>
          {filter === 2 ? <FilterListYear /> : null}
        </div>
        <div>
          <div
            onClick={() => toggleFilter(3)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) =>
              handleKeyDown(event.key === "Enter" ? 3 : null)
            }
            className={`filter__button button-author _btn-text ${
              filter === 3 ? "active" : null
            }`}
          >
            жанру
          </div>
          {filter === 3 ? <FilterListGenre /> : null}
        </div>
      </div>
    </div>
  );
}

export default FilterButton;
