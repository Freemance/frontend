import { CourseType, JobType, ProfileType, UserType } from './state';

/* eslint-disable no-unused-vars */
export enum ActionType {
  SetUser,
  RemoveUser,
  UpdateProfile,
  UpdateProfileCourses,
  UpdateProfileJobs,
}

export interface LoginUser {
  type: ActionType.SetUser;
  payload: UserType;
}

export interface RemoveUser {
  type: ActionType.RemoveUser;
}
export interface UpdateProfile {
  type: ActionType.UpdateProfile;
  payload: ProfileType;
}

export interface UpdateProfileCourses {
  type: ActionType.UpdateProfileCourses;
  payload: CourseType[];
}

export interface UpdateProfileJobs {
  type: ActionType.UpdateProfileJobs;
  payload: JobType[];
}

export type GlobalActions =
  | LoginUser
  | RemoveUser
  | UpdateProfile
  | UpdateProfileCourses
  | UpdateProfileJobs;
