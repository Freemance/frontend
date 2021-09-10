import { IAuth } from 'src/lib/apollo/auth/types';

/* eslint-disable no-unused-vars */
export enum ActionType {
  LoginUser,
}

export interface loginUser {
  type: ActionType.LoginUser;
  payload: IAuth;
}

export type GlobalActions = loginUser;
