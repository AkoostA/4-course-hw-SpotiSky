import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  activeTrackSelector,
  tokenSelector,
} from "../../store/selectors/selectors";
import { getFavoritesTracks, refreshToken } from "../../api/Api";
import {
  addActiveTrack,
  addFavoritesTracks,
  addToken,
} from "../../store/actions/creators/creators";
import MainCenterBlock from "../../components/MainCenterBlock/MainCenterBlock";
import MainNav from "../../components/MainNav/MainNav";
import MainSidebar from "../../components/MainSidebar/MainSidebar";
import S from "./Favorites.module.css";

function Favorites() {
  const [getError, setGetError] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = useSelector(tokenSelector);
  const activeTrack = useSelector(activeTrackSelector);
  const dispatch = useDispatch();

  const asyncGetTrackAll = async () => {
    try {
      const favoritesTracks = await getFavoritesTracks(token.access);
      dispatch(addActiveTrack({ ...activeTrack, favoritesPlaylist: true }));
      dispatch(addFavoritesTracks(favoritesTracks));
    } catch (error) {
      if (error.message === "Токен протух") {
        const newAccess = await refreshToken(token.refresh);
        dispatch(addToken({ ...token, access: newAccess.access }));
        const favoritesTracks = await getFavoritesTracks(newAccess.access);
        dispatch(addActiveTrack({ ...activeTrack, favoritesPlaylist: true }));
        dispatch(addFavoritesTracks(favoritesTracks));
        return;
      }
      setGetError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    asyncGetTrackAll();
  }, []);

  return (
    <main className={S.main}>
      <MainNav />
      <MainCenterBlock favorites loading={loading} getError={getError} />
      <MainSidebar loading={loading} />
    </main>
  );
}

export default Favorites;
