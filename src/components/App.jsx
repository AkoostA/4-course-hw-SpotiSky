/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from "react";
import { UserContext } from "./Contexts/Contexts";
import AppRoutes from "./AppRoutes/AppRoutes";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const toggleUser = (newUser) => {
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  return (
    <UserContext.Provider value={{ user, toggleUser }}>
      <AppRoutes />;
    </UserContext.Provider>
  );
}

export default App;
