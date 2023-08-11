import { Navigate, Outlet  } from "react-router-dom";
import { useUserContext } from "../Contexts/Contexts";

function ProtectedRoute() {
  const { user } = useUserContext();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
