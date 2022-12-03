export interface UserProps {
  email: string;
  name: string;
  description: string;
  social: string;
  activities: string[];
  admin: boolean;
}

export interface UserPropsShort {
  email: string;
  name: string;
}
