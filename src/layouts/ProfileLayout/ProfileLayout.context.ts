import { createContext, useContext } from 'react';

export const ProfileContext = createContext<TProfileContext>({
  isUser: true,
  isEdit: false,
  setIsEdit: () => {},
});

export type TProfileContext = {
  isUser: boolean;
  isEdit: boolean;
  setIsEdit: (e: boolean) => void;
};

export const useProfileContext = () => useContext(ProfileContext);
