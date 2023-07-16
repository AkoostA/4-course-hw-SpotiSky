import { Route, Routes } from "react-router-dom";
import Main from "../../routes/Main/Main";
import Login from "../../routes/Login/Login";
import Register from "../../routes/Register/Register";
import Favorites from "../../routes/Favorites/Favorites";
import NotFound from "../../routes/NotFound/NotFound";
import Сategory from "../../routes/Сategory/Сategory";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route
        path="/Main"
        element={
          <ProtectedRoute isAllowed>
            <Main />
          </ProtectedRoute>
        }
      />
      <Route
        path="/Favorites"
        element={
          <ProtectedRoute isAllowed>
            <Favorites />
          </ProtectedRoute>
        }
      />
      <Route path="/Category/:id" element={<Сategory />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
