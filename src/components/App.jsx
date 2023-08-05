import { useState } from "react";
import AppRoutes from "./AppRoutes/AppRoutes";

function App() {
  const [token, setToken] = useState(false);

  return <AppRoutes token={token} setToken={setToken} />;
}

export default App;
