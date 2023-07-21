import { useEffect, useState } from "react";
import AppRoutes from "./AppRoutes/AppRoutes";
import getTrackAll from "../api/Api";

function App() {
  const [token, setToken] = useState(false);
  const [allTrack, setAllTrack] = useState(null);
  const [loading, setLoading] = useState(true);
  const [getError, setGetError] = useState(null);
  const [openBar, setOpenBar] = useState(false);

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
    <AppRoutes
      token={token}
      setToken={setToken}
      allTrack={allTrack}
      loading={loading}
      getError={getError}
      openBar={openBar}
      setOpenBar={setOpenBar}
    />
  );
}

export default App;
