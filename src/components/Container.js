import "../css/style.css";
import MainNav from "./MainNav";
import MainCenterBlock from "./MainCenterBlock";
import MainSidebar from "./MainSidebar";

function Container() {
  return (
    <div className="container">
      <main className="main">
        <MainNav />
        <MainCenterBlock />
        <MainSidebar />
      </main>
    </div>
  );
}

export default Container;
