import { gql } from '@apollo/client';

export const ME = gql`
  query {
    me {
      id
      email
      role
      profile {
        firstName
        lastName
        slykUser
        jobTitle
        bio
        phone
        city
        country
        employmentHistory {
          id
          name
          company
          startDate
          endDate
        }
        courses {
          id
          course
          institution
          startDate
          endDate
        }
        skills {
          id
          name
        }
      }
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
