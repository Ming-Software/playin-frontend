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

const getPartEvents = (page: number, id: string) => {
  return new Promise((resolve, reject) => {
    ApiService.httpGet(`/api/event/participantpage/${id}?Page=${page}`)
      .then((data: any) => {
        resolve(data.data);
      })
      .catch((err: any) => {
        reject(err);
      })
      .finally();
  });
};

const getMyInvites = (page: number) => {
  return new Promise((resolve, reject) => {
    ApiService.httpGet(`/api/guest/guestspage/user?Page=${page}`)
      .then((data: any) => {
        resolve(data.data);
      })
      .catch((err: any) => {
        reject(err);
      })
      .finally();
  });
};

const inviteGuest = (id: string, userId: string) => {
  return new Promise((resolve, reject) => {
    const user = { UserID: userId };
    console.log(user);
    ApiService.httpPost(`/api/guest/${id}`, user)
      .then((data: any) => {
        resolve(data.data);
      })
      .catch((err: any) => {
        reject(err);
      })
      .finally();
  });
};

const acceptMyInvite = (id: string, userId: any) => {
  return new Promise((resolve, reject) => {
    ApiService.httpPost(`/api/participant/${id}`, userId)
      .then((data: any) => {
        resolve(data.data);
      })
      .catch((err: any) => {
        reject(err);
      })
      .finally();
  });
};

const deleteMyInvite = (id: string) => {
  return new Promise((resolve, reject) => {
    ApiService.httpDelete(`/api/guest/decline/${id}`)
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

const getMyPermissions = (page: number) => {
  return new Promise((resolve, reject) => {
    ApiService.httpGet(`/api/permission/permissionspage/user?Page=${page}`)
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

const deleteMyPermissions = (id: string) => {
  return new Promise((resolve, reject) => {
    ApiService.httpDelete(`/api/permission/cancel/${id}`)
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

const deleteParticipants = (id: any, userid: string) => {
  return new Promise((resolve, reject) => {
    const user = { UserID: userid };
    ApiService.httpDelete(`/api/participant/${id}`, user)
      .then((data: any) => {
        resolve(data.data);
      })
      .catch((err: any) => {
        reject(err);
      })
      .finally();
  });
};

const declineGuests = (id: any, userid: string) => {
  return new Promise((resolve, reject) => {
    const user = { UserID: userid };
    ApiService.httpDelete(`/api/guest/cancel/${id}`, user)
      .then((data: any) => {
        resolve(data.data);
      })
      .catch((err: any) => {
        reject(err);
      })
      .finally();
  });
};

const declinePermissions = (id: any, userid: string) => {
  return new Promise((resolve, reject) => {
    const user = { UserID: userid };
    ApiService.httpDelete(`/api/permission/decline/${id}`, user)
      .then((data: any) => {
        resolve(data.data);
      })
      .catch((err: any) => {
        reject(err);
      })
      .finally();
  });
};

const acceptPermissions = (id: any, userid: string) => {
  return new Promise((resolve, reject) => {
    const user = { UserID: userid };
    ApiService.httpPost(`/api/participant/${id}`, user)
      .then((data: any) => {
        resolve(data.data);
      })
      .catch((err: any) => {
        reject(err);
      })
      .finally();
  });
};

const getUserFiltered = (filter: string) => {
  return new Promise((resolve, reject) => {
    ApiService.httpGet(`/api/user/filter`, filter)
      .then((data: any) => {
        console.log(data);
        resolve(data.data.Users);
      })
      .catch((err: any) => {
        reject(err);
      })
      .finally();
  });
};

export default {
  getEvents,
  getEvent,
  getMyEvents,
  registerEvent,
  getInvitedUsers,
  getAskedUsers,
  getParticipants,
  getMyPermissions,
  deleteMyPermissions,
  deleteMyInvite,
  getMyInvites,
  acceptMyInvite,
  deleteParticipants,
  declineGuests,
  declinePermissions,
  acceptPermissions,
  getUserFiltered,
  inviteGuest,
  getPartEvents,
};
