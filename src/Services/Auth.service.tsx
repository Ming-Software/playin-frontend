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

const SignUpRequest = async (body: any) => {
  return new Promise((resolve, reject) => {
    ApiService.httpPost("/api/auth/register", body)
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
<<<<<<< HEAD
  setAuthToken("");
=======
  delete axios.defaults.headers.common["Authorization"];
>>>>>>> 4e38924fc0417f998cafcd20528ab6a07059d13e
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

<<<<<<< HEAD
export default { LoginRequest, SignUpRequest };
=======
export default { LoginRequest, SignUpRequest, Logout };
>>>>>>> 4e38924fc0417f998cafcd20528ab6a07059d13e
