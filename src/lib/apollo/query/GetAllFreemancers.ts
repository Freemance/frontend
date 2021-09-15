import { gql } from '@apollo/client';

export const getAllFreemancers = (searchfield: String) =>
  gql`
  query filterUser($tagid: Int!) {
    profileFilter(orderBy: { field: id, direction: asc }, query: "${searchfield}", tag: $tagid) {
      edges {
        node {
          slykUser
          avatar
          id
          jobTitle
          firstName
          lastName
          skills {
            icon
            name
          }
          user{
            username
          }
        }
      }
      totalCount
    }
  }
`;
