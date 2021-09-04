import { gql } from '@apollo/client';

export const GetAllFreemancers = gql`
  query filterUser {
    ProfileFilter(orderBy: { field: slykUser, direction: asc }, query: "") {
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
