import { useNavigate } from "react-router-dom";
import style from "./Favorites.module.css";

function Favorites() {
  const navigate = useNavigate();

  const mainButton = () => {
    navigate("/Main", { replace: true });
  };

  return (
    <div className={style.login}>
      <h1 className={style.login__header}>Favorites PAGE</h1>
      <button
        onClick={mainButton}
        className={style.login__button}
        type="button"
      >
        На Main страницу
      </button>
    </div>
  );
}

export default Favorites;
