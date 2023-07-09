import style from "./sidebarPersonal.module.css";

function SidebarPersonal() {
  return (
    <div className={style.sidebar__personal}>
      <p className={style.sidebar__personalName}>Sergey.Ivanov</p>
      <div className={style.sidebar__avatar} />
    </div>
  );
}

export default SidebarPersonal