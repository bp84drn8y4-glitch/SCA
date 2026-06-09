export type CurrentView = 'login' | 'register' | 'events' | 'study-groups' | 'calendar' | 'profile';

export interface CampusEvent {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  isJoined: boolean;
}

