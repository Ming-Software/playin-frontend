import React from "react";
import ApiService from "../../Services/Api.service";
import { newEventProps } from "./newEvent.interface";

const setNewEvent = () => {
  return new Promise<newEventProps>((resolve, reject) => {
    let data;
    ApiService.httpPost("/api/event/", data)
      .then((data: any) => {
        let newEvent: newEventProps = {
          nameEvent: data.data.name,
          description: data.data.description,
          start: data.data.start,
          finish: data.data.finish,
          public: data.data.public,
          maxParticipants: data.data.maxUsers,
          local: data.data.locale,
          sport_label: data.data.activity,
          social_label: data.data.social,
        };
        resolve(newEvent);
      })
      .catch((err: any) => {
        reject(err);
      })
      .finally();
  });
};

export default { setNewEvent };
