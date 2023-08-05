import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../img/logo-black.png";
import S from "./Register.module.css";
import { getRegister } from "../../api/Api";

function Register({ setToken }) {
  const [errorLog, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const getRegisterCheck = (response) => {
    if (response.email) {
      if (response.email !== email) {
        setError(response.email[0]);
        return;
      }
    }

    if (response.username) {
      if (response.username !== username) {
        setError(response.username[0]);
        return;
      }
    }

    if (response.password) {
      if (response.password !== password) {
        setError(response.password[0]);
        return;
      }
    }

    setToken(true);
    navigate("/");
  };

  const handleRegister = async () => {
    try {
      setDisabled(true);
      const response = await getRegister({ email, username, password });
      getRegisterCheck(response);
    } catch (error) {
      setError(error.message);
    } finally {
      setDisabled(false);
    }
  };

  const registerCheck = () => {
    try {
      if (!email || !username || !password || !repeatPassword) {
        if (!email) throw new Error("Не введена почта");
        if (!username) throw new Error("Не введен логин");
        if (!password) throw new Error("Не введен пароль");
        if (!repeatPassword) throw new Error("Не введен повторный пароль");
      }
      if (password !== repeatPassword) throw new Error("Пароль не совпадает");
      handleRegister();
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    setError(null);
  }, [email, password, repeatPassword]);

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
            type="text"
            name="login"
            placeholder="Логин"
            value={username}
            onChange={(event) => {
              setUserName(event.target.value);
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
          <input
            className={S.modalInput}
            type="password"
            name="repeat-password"
            placeholder="Повторите пароль"
            value={repeatPassword}
            onChange={(event) => {
              setRepeatPassword(event.target.value);
            }}
          />
        </div>
        {errorLog && <div className={S.error}>{errorLog}</div>}
        <div className={S.buttons}>
          <button
            className={S.primaryButton}
            type="button"
            onClick={registerCheck}
            disabled={disabled}
          >
            Зарегистрироваться
          </button>
          <Link to="/login">
            <button
              className={S.secondaryButton}
              type="button"
              disabled={disabled}
            >
              Вход
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
