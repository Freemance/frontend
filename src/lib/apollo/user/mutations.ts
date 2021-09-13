import { gql } from '@apollo/client';

export const PROFILE_UPDATE_INFO = gql`
  mutation profileUpdateBasicInfo(
    $avatar: String!
    $input: UpdateBasicProfileInput!
  ) {
    profileUpdateBasicInfo(avatar: $avatar, input: $input) {
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
