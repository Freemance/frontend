import { gql } from '@apollo/client';

export const PROFILE_UPDATE_INFO = gql`
  mutation profileUpdateBasicInfo($input: UpdateBasicProfileInput!) {
    profileUpdateBasicInfo(input: $input) {
      firstName
      lastName
      jobTitle
      bio
      phone
      city
      country
    }
  }
`;
