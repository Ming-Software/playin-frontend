export interface EventProps {
  ActivityID?: string;
  ID?: string;
  Name: string;
  Creator: string;
  CreatorID?: string;
  Locale: string;
  date: string;
  Start: string;
  Finish: string;
  Description: string;
  MaxUsers: number;
  CurrentUsers: number;
  Social: string;
  Activity: string;
  Public?: boolean;
}
