import { ProfileType, UserType } from 'src/context/state';

export interface IMe {
  me: UserType;
}

export interface IProfileUpdateInfo {
  file?: string;
  input: IProfileUpdateInfoInput;
}

export interface IProfileUpdateInfoRes {
  profileUpdateBasicInfo: ProfileType;
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
