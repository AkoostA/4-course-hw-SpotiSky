import { useNavigate, useParams } from "react-router-dom";
import style from "./Сategory.module.css";

function Сategory() {
  const params = useParams();
  const navigate = useNavigate();

  const mainButton = () => {
    navigate("/main", { replace: true });
  };

  return (
    <div className={style.сategory}>
      <h1 className={style.сategory__header}>Category {params.id} PAGE</h1>
      <button
        onClick={mainButton}
        className={style.сategory__button}
        type="button"
      >
        На Main страницу
      </button>
    </div>
  );
}

export default Сategory;
