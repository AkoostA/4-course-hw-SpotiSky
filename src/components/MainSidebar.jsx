import "../css/style.css";
import Skeleton from "./Skeleton";
import playListOne from "../img/playlist01.png";
import playListTwo from "../img/playlist02.png";
import playListThree from "../img/playlist03.png";

const sidebarPersonal = (
  <div className="sidebar__personal">
    <p className="sidebar__personal-name">Sergey.Ivanov</p>
    <div className="sidebar__avatar" />
  </div>
);

const sidebarListOne = (
  <div className="sidebar__item">
    <a className="sidebar__link" href="index.html">
      <img className="sidebar__img" src={playListOne} alt="day's playlist" />
    </a>
  </div>
);

const sidebarListTwo = (
  <div className="sidebar__item">
    <a className="sidebar__link" href="index.html">
      <img className="sidebar__img" src={playListTwo} alt="day's playlist" />
    </a>
  </div>
);

const sidebarListThree = (
  <div className="sidebar__item">
    <a className="sidebar__link" href="index.html">
      <img className="sidebar__img" src={playListThree} alt="day's playlist" />
    </a>
  </div>
);

function MainSidebar({ loading }) {
  return (
    <div className="main__sidebar sidebar">
      {sidebarPersonal}
      <div className="sidebar__block">
        {loading ? (
          <div className="sidebar__list">
            <Skeleton w="250px" h="150px" />
            <Skeleton w="250px" h="150px" />
            <Skeleton w="250px" h="150px" />
          </div>
        ) : (
          <div className="sidebar__list">
            {sidebarListOne}
            {sidebarListTwo}
            {sidebarListThree}
          </div>
        )}
      </div>
    </div>
  );
}

export default MainSidebar;
