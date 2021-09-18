import { gql } from '@apollo/client';

export const PROFILE_CREATE_JOB = gql`
  mutation profileCreateJob($input: CreateJobInput!) {
    profileCreateJob(input: $input) {
      id
      name
      company
      startDate
      endDate
    }
  }
`;
