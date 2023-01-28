import React from "react";
import ApiService from "../../Services/Api.service";
import { EventProps } from "./event.interface";

const getEvents = (page: number) => {
  return new Promise((resolve, reject) => {
    ApiService.httpGet(`/api/event/eventspage?Page=${page}`)
      .then((data: any) => {
        resolve(data.data);
      })
      .catch((err: any) => {
        reject(err);
      })
      .finally();
  });
};

const getMyEvents = (page: number, id: string) => {
  return new Promise((resolve, reject) => {
    console.log(`/api/event/eventspage/${id}?Page=${page}`);
    ApiService.httpGet(`/api/event/eventspage/${id}?Page=${page}`)
      .then((data: any) => {
        resolve(data.data);
      })
      .catch((err: any) => {
        reject(err);
      })
      .finally();
  });
};

const getEvent = (id: any) => {
  return new Promise((resolve, reject) => {
    ApiService.httpGet(`/api/event/${id}`)
      .then((data: any) => {
        resolve(data.data);
      })
      .catch((err: any) => {
        reject(err);
      })
      .finally();
  });
};

//tenho que usar isto!!
const registerEvent = (event: EventProps) => {
  return new Promise((resolve, reject) => {
    ApiService.httpPost(`/api/event`, event)
      .then((data: any) => {
        resolve(data.data);
      })
      .catch((err: any) => {
        reject(err);
      })
      .finally();
  });
};

const getInvitedUsers = (id: any) => {
  return new Promise((resolve, reject) => {
    ApiService.httpGet(`/api/guest/guestspage/event/${id}`)
      .then((data: any) => {
        resolve(data.data);
      })
      .catch((err: any) => {
        reject(err);
      })
      .finally();
  });
};

const getAskedUsers = (id: any) => {
  return new Promise((resolve, reject) => {
    ApiService.httpGet(`/api/permission/permissionspage/event/${id}`)
      .then((data: any) => {
        resolve(data.data);
      })
      .catch((err: any) => {
        reject(err);
      })
      .finally();
  });
};

const getParticipants = (id: any) => {
  return new Promise((resolve, reject) => {
    ApiService.httpGet(`/api/participant/participantspage/event/${id}`)
      .then((data: any) => {
        resolve(data.data);
      })
      .catch((err: any) => {
        reject(err);
      })
      .finally();
  });
};

export default { getEvents, getEvent, getMyEvents, registerEvent, getInvitedUsers, getAskedUsers, getParticipants };
