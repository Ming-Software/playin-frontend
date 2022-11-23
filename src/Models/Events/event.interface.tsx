export interface EventProps {
  nameEvent: string;
  creator: string;
  local: string;
  date: string;
  startTime: string;
  endTime: string;
  description: string;
  maxParticipants: number;
  actualParticipants: number;
  social_label: string;
  sport_label: string;
  public?: boolean;
}
