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

export type CurrentView = 'events' | 'study-groups' | 'calendar' | 'profile' | 'login' | 'register';

export interface StudyGroup {
  id: string;
  course: string;
  topic: string;
  membersCount: number;
  maxMembers: number;
  creator: string;
  major: 'General' | 'Industrial Engineering' | 'Health Informatics' | 'International Tourism';
  communicationLink: string;
  isJoined: boolean;
}
