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
        skills {
          id
          name
        }
      }
      role
    }
  }
`;

export const AVAILABLE_SKILLS = gql`
  query {
    filterSkills(query: "", orderBy: { direction: asc, field: name }) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;
