import "../../../css/style.css";
import Skeleton from "../../Skeleton";
import playListOne from "../../../img/playlist01.png";
import playListTwo from "../../../img/playlist02.png";
import playListThree from "../../../img/playlist03.png";
import SidebarItem from "../sidebarItem/sidebarItem";

function SidebarBlock({ loading }) {
  return (
    <div className="sidebar__block">
      {loading ? (
        <div className="sidebar__list">
          <Skeleton w="250px" h="150px" />
          <Skeleton w="250px" h="150px" />
          <Skeleton w="250px" h="150px" />
        </div>
      ) : (
        <div className="sidebar__list">
          <SidebarItem playList={playListOne} />
          <SidebarItem playList={playListTwo} />
          <SidebarItem playList={playListThree} />
        </div>
      )}
    </div>
  );
}

export default SidebarBlock;
