/* eslint-disable no-unused-vars */
export enum ActionType {
  LoginUser,
}

export interface loginUser {
  type: ActionType.LoginUser;
  payload: {};
}

export type GlobalActions = loginUser;
