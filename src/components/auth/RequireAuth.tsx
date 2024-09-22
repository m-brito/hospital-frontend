import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useLogin } from "../pages/Login/hooks/useLogin";

const RequireAuth = ({ allowedRoles }: { allowedRoles: string[] }) => {
  const { user, isLoading } = useLogin();
  const location = useLocation();

  if (isLoading) {
    return <></>;
  }

  if (user && allowedRoles.includes(user.role)) {
    return <Outlet />;
  } else if (user) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default RequireAuth;