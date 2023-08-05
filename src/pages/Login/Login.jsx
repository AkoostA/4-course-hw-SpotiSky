import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../img/logo-black.png";
import S from "./Login.module.css";

function Login({ isLoginMode = false }) {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    alert(`Выполняется вход: ${email} ${password}`);
    setError("Неизвестная ошибка входа");
  };

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password]);

  return (
    <div className={S.pageContainer}>
      <div className={S.modalForm}>
        <Link to="/login">
          <div className={S.modalLogo}>
            <img className={S.modalLogoImage} src={logo} alt="logo" />
          </div>
        </Link>
        <div className={S.inputs}>
          <input
            className={S.modalInput}
            type="text"
            name="login"
            placeholder="Почта"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            className={S.modalInput}
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        {error && <div className={S.error}>{error}</div>}
        <div className={S.buttons}>
          <button
            className={S.primaryButton}
            type="button"
            onClick={handleLogin}
          >
            Войти
          </button>
          <Link to="/register">
            <button className={S.secondaryButton} type="button">
              Зарегистрироваться
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
