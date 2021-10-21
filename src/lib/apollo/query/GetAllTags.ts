import { gql } from '@apollo/client';
export const getAllTags = gql`
  query filtertag {
    filterTags(orderBy: { direction: asc, field: name }) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;
