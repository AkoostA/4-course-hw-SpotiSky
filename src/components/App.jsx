import "../css/style.css";
import { useEffect, useState } from "react";
import MainNav from "./MainNav/MainNav";
import MainCenterBlock from "./MainCenterBlock";
import MainSidebar from "./MainSidebar";
import Bar from "./Bar";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, [loading]);

  return (
    <div className="container">
      <main className="main">
        <MainNav />
        <MainCenterBlock loading={loading} />
        <MainSidebar loading={loading} />
      </main>
      <div className="bar">
        <Bar loading={loading} />
      </div>
    </div>
  );
}

export default App;
