/* eslint-disable react/jsx-no-constructed-context-values */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRoutes from "./AppRoutes/AppRoutes";
import { addUser } from "../store/actions/creators/creators";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addUser(JSON.parse(localStorage.getItem("user"))));
  }, []);

  return <AppRoutes />;
}

export default App;
