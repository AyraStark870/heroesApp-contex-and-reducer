import { useContext } from "react";
import { AuthContext } from "../../auth/authContext";
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  //los elementos hijos pasan como una property called children cuando usas high order components
  const { user } = useContext(AuthContext);

  return user.logged ? children : <Navigate to="/login" />;
};
