import { UserType } from './state';

/* eslint-disable no-unused-vars */
export enum ActionType {
  SetUser,
}

export interface loginUser {
  type: ActionType.SetUser;
  payload: UserType;
}

export type GlobalActions = loginUser;
