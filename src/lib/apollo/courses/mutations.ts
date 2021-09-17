import { gql } from '@apollo/client';

export const PROFILE_CREATE_COURSE = gql`
  mutation profileCreateCourse($input: CreateCourseInput!) {
    profileCreateCourse(input: $input) {
      id
      course
      institution
      startDate
      endDate
    }
  }
`;
