import "../css/style.css";
import MainNav from "./MainNav";
import MainCenterBlock from "./MainCenterBlock";
import MainSidebar from "./MainSidebar";
import Bar from "./Bar";

function Container() {
  return (
    <div className="container">
      <main className="main">
        <MainNav />
        <MainCenterBlock />
        <MainSidebar />
      </main>
      <div className="bar">
        <Bar />
      </div>
    </div>
  );
}

export default Container;
