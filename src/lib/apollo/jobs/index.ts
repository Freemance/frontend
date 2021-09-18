import {
  PROFILE_CREATE_JOB,
  PROFILE_UPDATE_JOB,
  PROFILE_DELETE_JOB,
} from './mutations';
import {
  IProfileCreateJobRes,
  IProfileCreateJobInput,
  IProfileUpdateJobRes,
  IProfileUpdateJobInput,
  IProfileDeleteJobRes,
  IProfileDeleteJobInput,
} from './types';

export type {
  IProfileCreateJobRes,
  IProfileCreateJobInput,
  IProfileUpdateJobRes,
  IProfileUpdateJobInput,
  IProfileDeleteJobRes,
  IProfileDeleteJobInput,
};
export { PROFILE_CREATE_JOB, PROFILE_UPDATE_JOB, PROFILE_DELETE_JOB };
