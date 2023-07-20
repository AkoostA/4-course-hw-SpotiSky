import { useEffect, useState } from "react";
import AppRoutes from "./AppRoutes/AppRoutes";
import getTrackAll from "../api/Api";

function App() {
  const [allTrack, setAllTrack] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrackAll()
      .then((response) => {
        setAllTrack(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <AppRoutes allTrack={allTrack} loading={loading} />;
}

export default App;
