export type RoleType = 'USER' | 'CONTRACTOR' | 'ADMIN';

export type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  role: RoleType;
};

export interface GlobalState {
  user: UserType | null;
}

export const initGlobalState: GlobalState = {
  user: null,
};
