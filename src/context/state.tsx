export type RoleType = 'USER' | 'CONTRACTOR' | 'ADMIN';

export type UserType = {
  id: number;
  active: boolean;
  role: RoleType;
};

export interface GlobalState {
  user: UserType | null;
}

export const initGlobalState: GlobalState = {
  user: null,
};
