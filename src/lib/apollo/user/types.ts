import { UserType } from 'src/context/state';

export interface ILoginInput {
  email: string;
  password: string;
}

export interface IAuth {
  login: {
    accessToken: string;
    refreshToken: string;
    user: UserType;
  };
}
