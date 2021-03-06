import { useContext } from "react";
import { AuthContext } from "../../auth/authContext";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  //los elementos hijos pasan como una property called children cuando usas high order components
  const { user } = useContext(AuthContext);

  const { pathname, search } = useLocation();

  localStorage.setItem("lastPath", pathname + search);

  return user.logged ? children : <Navigate to="/login" />;
};
