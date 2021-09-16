export type RoleType = 'USER' | 'CONTRACTOR' | 'ADMIN';

export type SkillType = {
  id: number;
  name: string;
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
