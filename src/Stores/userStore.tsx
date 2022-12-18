import create from "zustand";
import UserState from "./userState";
export const useUserStore = create<UserState>((set) => ({
  email: "",
  name: "",
  setEmail: (email) => {
    set((state) => ({
      ...state,
      email,
    }));
  },
  setName: (name) => {
    set((state) => ({
      ...state,
      name,
    }));
  },
}));
