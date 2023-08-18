import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import MainBar from "../../components/MainBar/MainBar";
import MainCenterBlock from "../../components/MainCenterBlock/MainCenterBlock";
import MainNav from "../../components/MainNav/MainNav";
import MainSidebar from "../../components/MainSidebar/MainSidebar";
import style from "./Favorites.module.css";
import { playTrackSelector } from "../../store/selectors/selectors";
import getTrackAll from "../../api/Api";
import addTracks from "../../store/actions/creators/creators";

function Favorites() {
  const [getError, setGetError] = useState(null);
  const [loading, setLoading] = useState(true);
  const playTrack = useSelector(playTrackSelector);
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
        <MainCenterBlock loading={loading} getError={getError} />
        <MainSidebar loading={loading} />
      </main>
      <div className={style.bar}>
        {playTrack.id ? (
          <MainBar loading={loading} playTrack={playTrack} />
        ) : null}
      </div>
    </div>
  );
}

export default Favorites;
