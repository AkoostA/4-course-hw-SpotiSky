import { Link } from "react-router-dom";
import style from "./navMenu.module.css";

function NavMenu() {
  return (
    <div className={style.nav__menu}>
      <ul className={style.menu__list}>
        <li className={style.menu__item}>
          <Link to="/main" className={style.menu__link}>
            Главное
          </Link>
        </li>
        <li className={style.menu__item}>
          <Link to="/myPlayList" className={style.menu__link}>
            Мой плейлист
          </Link>
        </li>
        <li className={style.menu__item}>
          <Link to="/" className={style.menu__link}>
            Выйти
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavMenu;
