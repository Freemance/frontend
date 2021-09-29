import { gql } from '@apollo/client';

export const getSliderFreemancers = gql`
  query filterUser {
    profileFilter(orderBy: { field: id, direction: asc }, query: "") {
      edges {
        node {
          avatar
          id
          firstName
          lastName
          jobTitle
          skills {
            icon
            id
            name
          }
          user {
            username
          }
        }
      }
      totalCount
    }
  }
`;
