import { createContext, useContext } from 'react';
import { ProfileType } from 'src/context/state';

export const ProfileContext = createContext<TProfileContext>({
  profile: null,
  isUser: true,
  isEdit: false,
  setIsEdit: () => {},
});

export type TProfileContext = {
  profile: ProfileType;
  isUser: boolean;
  isEdit: boolean;
  setIsEdit: (e: boolean) => void;
};

export const useProfileContext = () => useContext(ProfileContext);
