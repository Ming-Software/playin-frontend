import ApiService from "./Api.service";


 const LoginRequest=async (body:any) => {
   return new Promise((resolve,reject) => { ApiService.httpPost('/api/auth/login',body)
    .then((data)=>{resolve (data)})
    .catch((err)=>{reject(err.message)})
    .finally()
 })
  }

  export default {LoginRequest};