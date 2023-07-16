import { useNavigate } from "react-router-dom";
import style from "./Registration.module.css";

function Registration() {
  const navigate = useNavigate();

  const loginButton = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className={style.login}>
      <h1 className={style.login__header}>Registration PAGE</h1>
      <button
        onClick={loginButton}
        className={style.login__button}
        type="button"
      >
        На Login страницу
      </button>
    </div>
  );
}

export default Registration;
