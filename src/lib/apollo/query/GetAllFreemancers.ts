import { gql } from '@apollo/client';

export const getAllFreemancers = (searchfield: String) =>
  gql`
  query filterUser {
    profileFilter(orderBy: { field: id, direction: asc }, query: "${searchfield}") {
      edges {
        node {
          slykUser
          avatar
          id
          tag {
            name
          }
          jobTitle
          firstName
          lastName
          skills {
            icon
            name
          }
        }
      }
      totalCount
    }
  }
`;
