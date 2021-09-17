import { CourseType } from 'src/context/state';

export interface IProfileCreateCourseRes {
  profileCreateCourse: CourseType;
}

export interface IProfileCreateCourseInput {
  input: CourseType;
}

export interface IProfileUpdateCourseRes {
  profileUpdateCourse: CourseType;
}

export interface IProfileUpdateCourseInput {
  id: number;
  input: CourseType;
}

export interface IProfileDeleteCourseRes {
  profileDeleteCourse: boolean;
}

export interface IProfileDeleteCourseInput {
  id: number;
}
