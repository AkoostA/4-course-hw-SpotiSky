import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import style from "./Main.module.css";
import MainNav from "../../components/MainNav/MainNav";
import MainCenterBlock from "../../components/MainCenterBlock/MainCenterBlock";
import MainSidebar from "../../components/MainSidebar/MainSidebar";
import MainBar from "../../components/MainBar/MainBar";
import getTrackAll from "../../api/Api";
import addTracks from "../../store/actions/creators/creators";

function Main() {
  const [getError, setGetError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [track, setTrack] = useState(null);
  const dispatch = useDispatch();

  const asyncGetTrackAll = async () => {
    try {
      const response = await getTrackAll();
      dispatch(addTracks(response));
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
        <MainNav />
        <MainCenterBlock
          loading={loading}
          getError={getError}
          setTrack={setTrack}
        />
        <MainSidebar loading={loading} />
      </main>
      <div className={style.bar}>
        {track ? (
          <MainBar
            loading={loading}
            track={track}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Main;
