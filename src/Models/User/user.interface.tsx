export interface UserProps {
  ID: string;
  Email?: string;
  Name?: string;
  Description?: string;
  Social?: string;
  Activities: string[];
  Admin?: boolean;
}

export interface UserPropsShort {
  id: string;
  email: string;
  name: string;
  description?: string;
}
