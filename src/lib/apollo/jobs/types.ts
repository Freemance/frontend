import { JobType } from 'src/context/state';

export interface IProfileCreateJobRes {
  profileCreateJob: JobType;
}

export interface IProfileCreateJobInput {
  input: JobType;
}

export interface IProfileUpdateJobRes {
  profileUpdateJob: JobType;
}

export interface IProfileUpdateJobInput {
  id: number;
  input: JobType;
}

export interface IProfileDeleteJobRes {
  profileDeleteJob: boolean;
}

export interface IProfileDeleteJobInput {
  id: number;
}
