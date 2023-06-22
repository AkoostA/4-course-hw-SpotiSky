import "../css/style.css";
import MainNav from "./MainNav";
import MainCenterBlock from "./MainCenterBlock";

function Container() {
  return (
    <div className="container">
      <main className="main">
        <MainNav />
        <MainCenterBlock />
      </main>
    </div>
  );
}

export default Container;
