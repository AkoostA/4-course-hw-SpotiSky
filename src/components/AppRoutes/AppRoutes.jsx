import { Route, Routes } from "react-router-dom";
import Main from "../../pages/Main/Main";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Favorites from "../../pages/Favorites/Favorites";
import NotFound from "../../pages/NotFound/NotFound";
import Сategory from "../../pages/Сategory/Сategory";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import TOKEN from "../../token";

function AppRoutes({ allTrack, loading, getError, setOpenBar, openBar }) {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute isAllowed={TOKEN} />}>
        <Route
          path="/main"
          element={
            <Main
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
