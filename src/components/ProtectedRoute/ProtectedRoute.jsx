import { Navigate, Outlet  } from "react-router-dom";

function ProtectedRoute({ redirectPath = "/", token }) {
  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
