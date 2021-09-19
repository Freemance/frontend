export type RoleType = 'USER' | 'CONTRACTOR' | 'ADMIN';

export type SkillType = {
  id: number;
  name: string;
};

export type CourseType = {
  id?: number;
  course: string;
  institution: string;
  startDate: string;
  endDate: string;
};

export type JobType = {
  id?: number;
  name: string;
  company: string;
  startDate: string;
  endDate: string;
};

export type ProfileType = {
  firstName?: string;
  lastName?: string;
  slykUser?: string;
  jobTitle?: string;
  bio?: string;
  phone?: string;
  city?: string;
  country?: string;
  employmentHistory?: JobType[];
  courses?: CourseType[];
  skills?: SkillType[];
};

export type UserType = {
  id: number;
  email: string;
  active: boolean;
  role: RoleType;
  profile: ProfileType;
};

export interface GlobalState {
  user: UserType | null;
}

export const initGlobalState: GlobalState = {
  user: null,
};
