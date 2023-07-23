import { useNavigate } from "react-router-dom";
import style from "./Register.module.css";

function Register() {
  const navigate = useNavigate();

  const loginButton = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className={style.register}>
      <h1 className={style.register__header}>Register PAGE</h1>
      <button
        onClick={loginButton}
        className={style.register__button}
        type="button"
      >
        На Login страницу
      </button>
    </div>
  );
}

export default Register;
