import { gql } from '@apollo/client';

export const ME = gql`
  query {
    me {
      id
      email
      profile {
        firstName
        lastName
        slykUser
        jobTitle
        bio
        phone
        city
        country
      }
      role
    }
  }
`;
