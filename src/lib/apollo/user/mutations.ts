import { gql } from '@apollo/client';

export const PROFILE_UPDATE_INFO = gql`
  mutation profileUpdateBasicInfo(
    $file: Upload
    $input: UpdateBasicProfileInput!
    $tagId: Int
  ) {
    profileUpdateBasicInfo(file: $file, input: $input, tagId: $tagId) {
      avatar
      firstName
      lastName
      slykUser
      tag {
        id
        name
      }
      jobTitle
      bio
      phone
      city
      country
    }
  }
`;

export const PROFILE_ADD_SKILL = gql`
  mutation profileAddSkill($skillId: Int!) {
    profileAddSkill(skillId: $skillId) {
      skills {
        id
        name
      }
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
