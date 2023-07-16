import { Route, Routes } from "react-router-dom";
import Main from "../../routes/Main/Main";
import Login from "../../routes/Login/Login";
import Registration from "../../routes/Registration/Registration";
import MyPlayList from "../../routes/MyPlayList/MyPlayList";
import NotFound from "../../routes/NotFound/NotFound";
import Selection from "../../routes/Selection/Selection";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login form="login" />} />
      <Route
        path="/registration"
        element={<Registration form="registration" />}
      />
      <Route path="/main" element={<Main form="main" />} />
      <Route path="/myPlayList" element={<MyPlayList form="myPlayList" />} />
      <Route path="/selection/:id" element={<Selection form="selection" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
