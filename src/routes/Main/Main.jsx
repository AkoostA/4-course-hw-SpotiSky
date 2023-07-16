import { useState, useEffect } from "react";
import style from "./Main.module.css";
import MainNav from "../../components/MainNav/MainNav";
import MainCenterBlock from "../../components/MainCenterBlock/MainCenterBlock";
import MainSidebar from "../../components/MainSidebar/MainSidebar";
import MainBar from "../../components/MainBar/MainBar";

function Main() {
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

export default Main;
