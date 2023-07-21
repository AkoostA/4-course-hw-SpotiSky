import style from "./Main.module.css";
import MainNav from "../../components/MainNav/MainNav";
import MainCenterBlock from "../../components/MainCenterBlock/MainCenterBlock";
import MainSidebar from "../../components/MainSidebar/MainSidebar";
import MainBar from "../../components/MainBar/MainBar";

function Main({ setToken, loading, allTrack, getError, openBar, setOpenBar }) {
  return (
    <div className={style.container}>
      <main className={style.main}>
        <MainNav setToken={setToken} />
        <MainCenterBlock
          loading={loading}
          allTrack={allTrack}
          getError={getError}
          setOpenBar={setOpenBar}
        />
        <MainSidebar loading={loading} />
      </main>
      <div className={style.bar}>
        <MainBar loading={loading} openBar={openBar} />
      </div>
    </div>
  );
}

export default Main;
