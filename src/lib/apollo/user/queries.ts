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
        portfolioItem {
          id
          screenshts
          proyect
          description
          startDate
          endDate
        }
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

export const PROFILE_BY_ID = gql`
  query profileById($id: Int!) {
    profileById(id: $id) {
      id
      firstName
      lastName
      slykUser
      jobTitle
      bio
      phone
      city
      country
      courses {
        id
        course
        institution
        startDate
        endDate
      }
      employmentHistory {
        id
        name
        company
        startDate
        endDate
      }
      portfolioItem {
        id
        proyect
        description
        link
        screenshts
        startDate
        endDate
      }
      skills {
        id
        name
      }
    }
  }
`;
