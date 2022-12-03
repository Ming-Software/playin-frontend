import create from "zustand";
import UserState from "./userState";
export const useUserStore = create<UserState>((set) => ({
  email: "",
  setEmail: (email) => {
    set((state) => ({
      ...state,
      email,
    }));
  },
}));
