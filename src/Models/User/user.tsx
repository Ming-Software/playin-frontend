import ApiService from "../../Services/Api.service";
import { UserProps, UserPropsShort } from "./user.interface";

const setTopBarName = () => {
  return new Promise<UserPropsShort>((resolve, reject) => {
    ApiService.httpGet("/api/user")
      .then((data: any) => {
        let user: UserPropsShort = {
          name: data.data.Name,
          email: data.data.Email,
        };
        resolve(user);
      })
      .catch((err: any) => {
        reject(err);
      })
      .finally();
  });
};

const editUser = (user: UserProps) => {
  return new Promise((resolve, reject) => {
    ApiService.httpPatch("/api/user", user)
      .then((data: any) => {
        resolve(data.data);
      })
      .catch((err: any) => {
        reject(err);
      })
      .finally();
  });
};

export default { setTopBarName, editUser };
