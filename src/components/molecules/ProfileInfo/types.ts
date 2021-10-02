import { ApolloError } from '@apollo/client';
import { IProfileUpdateInfoInput } from 'src/lib/apollo/user';

export default interface IProfileInfo {
  isLoading: boolean;
  error: ApolloError;
  handleSaveInfo: (
    updatedInfo: IProfileUpdateInfoInput,
    tagId: string | number
  ) => void;
}
