type UserState = {
  email: string;
  name: string;
  setEmail: (email: string) => void;
  setName: (name: string) => void;
};

export default UserState;
