import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";

function Login() {
  const navigate = useNavigate();

  const enterButton = () => {
    navigate("/main", { replace: true });
  };

  const registrationButton = () => {
    navigate("/registration", { replace: true });
  };

  return (
    <div className={style.login}>
      <h1 className={style.login__header}>Login PAGE</h1>
      <button
        onClick={enterButton}
        className={style.login__button}
        type="button"
      >
        ВХОД
      </button>
      <button
        onClick={registrationButton}
        className={style.login__button}
        type="button"
      >
        РЕГИСТРАЦИЯ
      </button>
    </div>
  );
}

export default Login;
