import create from "zustand";
import UserState from "./userState";
export const useUserStore = create<UserState>((set) => ({
  id: "",
  email: "",
  name: "",
  setId: (id) => {
    set((state) => ({
      ...state,
      id,
    }));
  },
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
