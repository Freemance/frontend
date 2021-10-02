import { gql } from '@apollo/client';

export const AVAILABLE_TAGS = gql`
  query {
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
