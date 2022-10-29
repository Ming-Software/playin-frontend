import axios from "axios"


const config = {
    api: 'https://playin-backend.fly.dev',
    options: {
      headers: { 'content-type': 'application/json' },
    },
  };



const httpGet = (endpoint:string) => {
  return new Promise((resolve,reject) => { axios.get(`${config.api}${endpoint}`,config.options)
    .then((response) => {resolve (response)})
    .catch((error) => {
    console.error(error);
    reject (error);
  }).finally(); 
}
)
};

const httpPost=(endpoint:string,data:any) => {
    return new Promise((resolve,reject) => { axios.post(`${config.api}${endpoint}`, data,config.options)
        .then((response) => {resolve (response)})
        .catch((error) => {
          console.error(error);
          reject (error);
        }).finally(); 
      }
    )
    
}

const httpPut = (endpoint:string, data:any) => {
  return new Promise((resolve,reject) => { axios.put(`${config.api}${endpoint}`, data,config.options)
    .then((response) => {resolve (response)})
    .catch((error) => {
    console.error(error);
    reject (error);
  }).finally(); 
}
)
  };


const httpDelete = (endpoint:string, data:any) => {
  return new Promise((resolve,reject) => { axios.post(`${config.api}${endpoint}`, data,config.options)
    .then((response) => {resolve (response)})
    .catch((error) => {
    console.error(error);
    reject (error);
  }).finally(); 
}
)
  };

export default { httpGet, httpPost, httpPut, httpDelete };