import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/Authcontext";

const PrivateRoute = () => {
  const { isLogin, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="loading-spinner">인증 확인 중...</div>;
  }

  return isLogin ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} replace state={{ from: location }} />
  );
};

export default PrivateRoute;
