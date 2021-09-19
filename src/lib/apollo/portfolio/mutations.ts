import { gql } from '@apollo/client';

export const PROFILE_CREATE_PORTFOLIO = gql`
  mutation profileCreatePortfolio(
    $files: [Upload!]
    $input: CreatePortfolioInput!
  ) {
    profileCreatePortfolio(files: $files, input: $input) {
      id
      proyect
      description
      startDate
      screenshts
      endDate
    }
  }
`;

export const PROFILE_UPDATE_PORTFOLIO = gql`
  mutation profileUpdatePortfolio(
    $files: [Upload!]
    $id: Int!
    $input: UpdatePortfolioInput!
  ) {
    profileUpdatePortfolio(files: $files, id: $id, input: $input) {
      id
      proyect
      description
      link
      screenshts
      startDate
      endDate
    }
  }
`;
