export interface EventProps {
  creator: string;
  date: string;
  startTime: string;
  endTime: string;
  nameEvent: string;
  local: string;
  start: string;
  finish: string;
  description: string;
  maxParticipants: number;
  actualParticipants: number;
  social_label: string;
  sport_label: string;
  public?: boolean;
}
