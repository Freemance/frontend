import { gql } from '@apollo/client';

export const ME = gql`
  query {
    me {
      id
      email
      role
      profile {
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

export const PROFILE_BY_USERNAME = gql`
  query profileByUsername($username: String!) {
    profileByUsername(username: $username) {
      id
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
