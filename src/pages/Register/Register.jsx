import { useNavigate } from "react-router-dom";
import style from "./Register.module.css";

function Register() {
  const navigate = useNavigate();

  const loginButton = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className={style.login}>
      <h1 className={style.login__header}>Register PAGE</h1>
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

export default Register;
