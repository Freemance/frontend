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

export const PROFILE_UPDATE_JOB = gql`
  mutation profileUpdateJob($id: Int!, $input: UpdateJobInput!) {
    profileUpdateJob(id: $id, input: $input) {
      id
      name
      company
      startDate
      endDate
    }
  }
`;
