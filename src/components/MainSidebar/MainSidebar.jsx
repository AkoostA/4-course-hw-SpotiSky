import "../../css/style.css";
import SidebarPersonal from "./sidebarPersonal/sidebarPersonal";
import SidebarBlock from "./sidebarBlock/sidebarBlock";

function MainSidebar({ loading }) {
  return (
    <div className="main__sidebar sidebar">
      <SidebarPersonal />
      <SidebarBlock loading={loading} />
    </div>
  );
}

export default MainSidebar;
