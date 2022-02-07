import { useEffect, useReducer } from "react";
import { authReducer } from "./auth/authReducer";

import { AppRouter } from "./components/routers/AppRouter";
import { AuthContext } from "./auth/authContext";

//se define afuera Porque al ser algo estático que únicamente tiene que cargarse una vez, no necesitamos que esté dentro de HeroesApp.
//Así si se actualizara HeroesApp no se volvería a realizar el init.
const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if (!user) return;

    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
