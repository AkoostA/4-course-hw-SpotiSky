import { useEffect, useState } from "react";
import style from "./App.module.css";
import MainNav from "./MainNav/MainNav";
import MainCenterBlock from "./MainCenterBlock/MainCenterBlock";
import MainSidebar from "./MainSidebar/MainSidebar";
import MainBar from "./MainBar/MainBar";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, [loading]);

  return (
    <div className={style.container}>
      <main className={style.main}>
        <MainNav />
        <MainCenterBlock loading={loading} />
        <MainSidebar loading={loading} />
      </main>
      <div className={style.bar}>
        <MainBar loading={loading} />
      </div>
    </div>
  );
}

export default App;
