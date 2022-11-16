import axios from "axios";
axios.defaults.baseURL = "https://playin-backend.fly.dev";
axios.defaults.withCredentials = true;

const httpGet = (endpoint: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${endpoint}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        if (endpoint != "/api/auth/refresh") httpRefresh(error, endpoint, "get", resolve, reject);
        else {
          window.location.href = "/";
        }
      })
      .finally();
  });
};

const httpPost = (endpoint: string, data: any) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${endpoint}`, data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        httpRefresh(error, endpoint, "post", resolve, reject, data);
      })
      .finally();
  });
};

const httpPut = (endpoint: string, data: any) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${endpoint}`, data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        httpRefresh(error, endpoint, "put", resolve, reject, data);
      })
      .finally();
  });
};

const httpDelete = (endpoint: string, data: any) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${endpoint}`, data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        httpRefresh(error, endpoint, "delete", resolve, reject, data);
      })
      .finally();
  });
};

const httpRefresh = (error: any, endpoint: string, requestType: string, resolve: any, reject: any, data1?: any) => {
  if (error.response.data.statusCode == 401) {
    httpGet("/api/auth/refresh")
      .then((data: any) => {
        console.log(data);
        const token = data.data.AccessToken;
        console.log(token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        switch (requestType) {
          case "get":
            httpGet(endpoint)
              .then((data) => resolve(data))
              .catch((err) => reject(err))
              .finally();
            break;
          case "post":
            httpPost(endpoint, data1)
              .then((data) => resolve(data))
              .catch((err) => reject(err))
              .finally();
            break;
          case "put":
            httpPut(endpoint, data1)
              .then((data) => resolve(data))
              .catch((err) => reject(err))
              .finally();
            break;
          case "delete":
            httpDelete(endpoint, data1)
              .then((data) => resolve(data))
              .catch((err) => reject(err))
              .finally();
            break;
        }
      })
      .catch((err) => {
        reject(err);
      })
      .finally();
  } else {
    reject(error);
  }
};

export default { httpGet, httpPost, httpPut, httpDelete };
