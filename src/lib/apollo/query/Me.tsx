import { gql } from '@apollo/client';

export const Me = gql`
  query Me {
    me {
      profile {
        avatar
      }
    }
  }
`;
