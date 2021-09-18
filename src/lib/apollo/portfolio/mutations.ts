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
