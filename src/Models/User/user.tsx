import ApiService from "../../Services/Api.service";
import { UserPropsShort } from "./user.interface";

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

export default { setTopBarName };
