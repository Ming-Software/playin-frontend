import { useState } from "react";
import ApiService from "./Api.service";
import axios from "axios";

const LoginRequest = async (body: any) => {
  return new Promise((resolve, reject) => {
    ApiService.httpPost("/api/auth/login", body)
      .then((data: any) => {
        setAuthToken(data.data.AccessToken);
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      })
      .finally();
  });
};

const Logout = () => {
  setAuthToken("");
};

export const refreshToken = () => {
  ApiService.httpPost("/api/auth/refresh", "")
    .then((data: any) => {
      setAuthToken(data.data.AccessToken);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally();
};

export const setAuthToken = (token: string) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else delete axios.defaults.headers.common["Authorization"];
};

export default { LoginRequest };
