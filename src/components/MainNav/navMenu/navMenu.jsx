import { Link, useNavigate } from "react-router-dom";
import style from "./navMenu.module.css";

function NavMenu() {
  const navigate = useNavigate();

  const exit = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className={style.nav__menu}>
      <ul className={style.menu__list}>
        <li className={style.menu__item}>
          <Link to="/" className={style.menu__link}>
            Главное
          </Link>
        </li>
        <li className={style.menu__item}>
          <Link to="/favorites" className={style.menu__link}>
            Мой плейлист
          </Link>
        </li>
        <li className={style.menu__item}>
          <button type="button" onClick={exit} className={style.menu__link}>
            Выйти
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NavMenu;
