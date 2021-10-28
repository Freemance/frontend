export type RoleType = 'USER' | 'CONTRACTOR' | 'ADMIN';

export type SkillType = {
  id: number;
  name: string;
  icon: string[];
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

export type PortfolioItemType = {
  id?: number;
  proyect: string;
  description: string;
  link?: string;
  screenshts?: string[];
  startDate: string;
  endDate: string;
};

export type TagType = {
  id: number;
  name: string;
};

export type ProfileType = {
  id?: number;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  slykUser?: string;
  tag?: TagType;
  jobTitle?: string;
  bio?: string;
  phone?: string;
  city?: string;
  country?: string;
  portfolioItem?: PortfolioItemType[];
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
