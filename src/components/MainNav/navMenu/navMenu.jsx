import style from "./navMenu.module.css";

function NavMenu() {
  return (
    <div className={style.nav__menu}>
      <ul className={style.menu__list}>
        <li className={style.menu__item}>
          <a href="index.html" className={style.menu__link}>
            Главное
          </a>
        </li>
        <li className={style.menu__item}>
          <a href="index.html" className={style.menu__link}>
            Мой плейлист
          </a>
        </li>
        <li className={style.menu__item}>
          <a href="index.html" className={style.menu__link}>
            Войти
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavMenu;
