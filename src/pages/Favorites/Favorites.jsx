import { useNavigate } from "react-router-dom";
import style from "./Favorites.module.css";

function Favorites() {
  const navigate = useNavigate();

  const mainButton = () => {
    navigate("/main", { replace: true });
  };

  return (
    <div className={style.favorites}>
      <h1 className={style.favorites__header}>Favorites PAGE</h1>
      <button
        onClick={mainButton}
        className={style.favorites__button}
        type="button"
      >
        На Main страницу
      </button>
    </div>
  );
}

export default Favorites;
