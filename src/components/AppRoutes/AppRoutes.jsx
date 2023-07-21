import { Route, Routes } from "react-router-dom";
import Main from "../../pages/Main/Main";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Favorites from "../../pages/Favorites/Favorites";
import NotFound from "../../pages/NotFound/NotFound";
import Сategory from "../../pages/Сategory/Сategory";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function AppRoutes({
  token,
  setToken,
  allTrack,
  loading,
  getError,
  setOpenBar,
  openBar,
}) {
  return (
    <Routes>
      <Route path="/" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute token={token} />}>
        <Route
          path="/main"
          element={
            <Main
              setToken={setToken}
              allTrack={allTrack}
              loading={loading}
              getError={getError}
              setOpenBar={setOpenBar}
              openBar={openBar}
            />
          }
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/category/:id" element={<Сategory />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
