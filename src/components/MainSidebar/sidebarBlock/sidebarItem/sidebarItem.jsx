import "../../../../css/style.css";

function SidebarItem({ playList }) {
  return (
    <div className="sidebar__item">
      <a className="sidebar__link" href="index.html">
        <img className="sidebar__img" src={playList} alt="day's playlist" />
      </a>
    </div>
  );
}

export default SidebarItem;
