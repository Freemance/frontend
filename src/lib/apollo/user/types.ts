import { ProfileType, SkillType, UserType } from 'src/context/state';

export interface IMe {
  me: UserType;
}

export interface IProfileUpdateInfo {
  file?: File;
  input: IProfileUpdateInfoInput;
  tagId?: number | string;
}

export interface IProfileUpdateInfoRes {
  profileUpdateBasicInfo: ProfileType;
}

export interface IProfileUpdateInfoInput {
  firstName: string;
  lastName: string;
  slykUser?: string;
  jobTitle: string;
  bio: string;
  phone: string;
  city: string;
  country: string;
}

export interface IProfileAddSkillInput {
  skillId: number;
}

export interface IProfileAddSkillRes {
  profileAddSkill: ProfileType;
}
export interface IProfileDeleteSkillInput {
  skillId: number;
}

export interface IProfileDeleteSkillRes {
  profileRemoveSkill: ProfileType;
}

export interface IAvailableSkillsRes {
  filterSkills: ISkillConnection;
}

export interface ISkillConnection {
  edges: ISkillEdge[];
}

export interface ISkillEdge {
  node: SkillType;
}

export interface IProfileByUsernameRes {
  profileByUsername: ProfileType;
}

export interface IProfileByUsernameInput {
  username: string;
}
