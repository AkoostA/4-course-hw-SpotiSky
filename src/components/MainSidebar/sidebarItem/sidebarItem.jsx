import style from "./sidebarItem.module.css";

function SidebarItem({ playList }) {
  return (
    <div className={style.sidebar__item}>
      <a className={style.sidebar__link} href="index.html">
        <img className={style.sidebar__img} src={playList} alt="day's playlist" />
      </a>
    </div>
  );
}

export default SidebarItem;
