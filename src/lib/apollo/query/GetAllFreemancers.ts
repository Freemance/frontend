import { gql } from '@apollo/client';

export const getAllFreemancers = (searchfield: String) =>
  gql`
  query filterUser {
    ProfileFilter(orderBy: { field: id, direction: asc }, query: "${searchfield}") {
      edges {
        node {
          slykUser
          id
        }
      }
      totalCount
    }
  }
`;
