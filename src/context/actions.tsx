import { ProfileType, UserType } from './state';

/* eslint-disable no-unused-vars */
export enum ActionType {
  SetUser,
  RemoveUser,
  UpdateProfile,
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

export type GlobalActions = LoginUser | RemoveUser | UpdateProfile;
