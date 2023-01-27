type UserState = {
  id: string;
  email: string;
  name: string;
  setId: (id: string) => void;
  setEmail: (email: string) => void;
  setName: (name: string) => void;
};

export default UserState;
