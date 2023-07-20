import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import TOKEN from "../../token";

function Login() {
  const navigate = useNavigate();
  TOKEN.token = "noToken";

  const enterButton = () => {
    TOKEN.token = "token";
    navigate("/main", { replace: true });
  };

  const registerButton = () => {
    navigate("/register", { replace: true });
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
        onClick={registerButton}
        className={style.login__button}
        type="button"
      >
        РЕГИСТРАЦИЯ
      </button>
    </div>
  );
}

export default Login;
