import { Navigate, Outlet  } from "react-router-dom";

function ProtectedRoute({ redirectPath = "/", isAllowed }) {
  if (isAllowed.token !== "token") {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
