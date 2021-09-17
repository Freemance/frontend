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

export const PROFILE_UPDATE_COURSE = gql`
  mutation profileUpdateCourse($id: Int!, $input: UpdateCourseInput!) {
    profileUpdateCourse(id: $id, input: $input) {
      id
      course
      institution
      startDate
      endDate
    }
  }
`;
