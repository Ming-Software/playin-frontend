import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useUserStore } from "../Stores/userStore";
const AuthGaurd = ({ children }: any) => {
  const logged = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/" && logged.id == "") {
      navigate("/");
    }
  }, [location.pathname]);
  return children;
};

export default AuthGaurd;
