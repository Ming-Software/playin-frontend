import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useUserStore } from "../";
const AuthGaurd = ({ children }: any) => {
  const isLogged = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/list" && !SAMPLE_PERMISSION.list) {
      navigate("/");
    }
    console.log(location);
  }, [location.pathname]);
  return children;
};

export default AuthGaurd;
