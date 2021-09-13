import { UserType } from 'src/context/state';

export interface IMe {
  me: UserType;
}

export interface IProfileUpdateInfo {
  file?: string;
  input: IProfileUpdateInfoInput;
}

export interface IProfileUpdateInfoRes {
  firstName: string;
  lastName: string;
  jobTitle: string;
  bio: string;
  phone: string;
  city: string;
  country: string;
}

interface IProfileUpdateInfoInput {
  firstName: string;
  lastName: string;
  jobTitle: string;
  bio: string;
  phone: string;
  city: string;
  country: string;
}
