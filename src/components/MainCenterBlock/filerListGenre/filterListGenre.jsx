import "../../../css/style.css";

function FilterListGenre() {
  return (
    <div className="filterList">
      <ul className="filterList__ul">
        <li className="filterList__text">Рок</li>
        <li className="filterList__text">Хип-хоп</li>
        <li className="filterList__text">Поп-музыка</li>
        <li className="filterList__text">Техно</li>
        <li className="filterList__text">Инди</li>
      </ul>
    </div>
  );
}

export default FilterListGenre;
