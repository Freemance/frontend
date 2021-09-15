import { gql } from '@apollo/client';

export const PROFILE_UPDATE_INFO = gql`
  mutation profileUpdateBasicInfo($input: UpdateBasicProfileInput!) {
    profileUpdateBasicInfo(input: $input) {
      firstName
      lastName
      slykUser
      jobTitle
      bio
      phone
      city
      country
    }
  }
`;

export const PROFILE_REMOVE_SKILL = gql`
  mutation profileRemoveSkill($skillId: Int!) {
    profileRemoveSkill(skillId: $skillId) {
      skills {
        id
        name
      }
    }
  }
`;
