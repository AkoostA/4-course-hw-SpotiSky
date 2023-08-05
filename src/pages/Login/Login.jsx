import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../img/logo-black.png";
import S from "./Login.module.css";
import { getLogin } from "../../api/Api";

function Login({ setToken }) {
  const [disabled, setDisabled] = useState(false);
  const [errorLog, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const getLoginCheck = (response) => {
    if (response.detail) {
      setError(response.detail);
      return;
    }

    setToken(true);
    navigate("/");
  };

  const handleLogin = async () => {
    try {
      setDisabled(true);
      const response = await getLogin({ email, password });
      getLoginCheck(response);
    } catch (error) {
      setError(error.message);
    } finally {
      setDisabled(false);
    }
  };

  const loginCheck = () => {
    try {
      if (!email || !password) {
        if (!email) throw new Error("Не введена почта");
        if (!password) throw new Error("Не введен пароль");
      }
      handleLogin();
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    setError(null);
  }, [email, password]);

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
        {errorLog && <div className={S.error}>{errorLog}</div>}
        <div className={S.buttons}>
          <button
            className={S.primaryButton}
            type="button"
            onClick={loginCheck}
            disabled={disabled}
          >
            Войти
          </button>
          <Link to="/register">
            <button
              className={S.secondaryButton}
              type="button"
              disabled={disabled}
            >
              Зарегистрироваться
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
