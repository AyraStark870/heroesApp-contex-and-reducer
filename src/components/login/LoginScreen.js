import React from "react";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const action = { type: types.login, payload: { name: "Clau" } };
    dispatch(action);

    const lastPath = localStorage.getItem("lastPath") || "/marvel";

    navigate(lastPath, { replace: true });
  };

  return (
    <div className="">
      <h1>login</h1>
      <hr />
      <button onClick={handleLogin} className="btn btn-primary">
        login
      </button>
    </div>
  );
};
