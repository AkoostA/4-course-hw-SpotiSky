import { useEffect, useState } from "react";
import style from "./Main.module.css";
import MainNav from "../../components/MainNav/MainNav";
import MainCenterBlock from "../../components/MainCenterBlock/MainCenterBlock";
import MainSidebar from "../../components/MainSidebar/MainSidebar";
import MainBar from "../../components/MainBar/MainBar";
import getTrackAll from "../../api/Api";

function Main({ setToken }) {
  const [getError, setGetError] = useState(null);
  const [allTrack, setAllTrack] = useState(null);
  const [loading, setLoading] = useState(true);
  const [track, setTrack] = useState(null);
  const [play, setPlay] = useState(false);

  const asyncGetTrackAll = async () => {
    try {
      const response = await getTrackAll();
      setAllTrack(response);
    } catch (error) {
      setGetError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    asyncGetTrackAll();
  }, []);

  return (
    <div className={style.container}>
      <main className={style.main}>
        <MainNav setToken={setToken} />
        <MainCenterBlock
          setPlay={setPlay}
          loading={loading}
          allTrack={allTrack}
          getError={getError}
          setTrack={setTrack}
        />
        <MainSidebar loading={loading} />
      </main>
      <div className={style.bar}>
        {track ? (
          <MainBar
            play={play}
            setPlay={setPlay}
            loading={loading}
            track={track}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Main;
