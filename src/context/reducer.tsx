import { ActionType, GlobalActions } from './actions';
import { GlobalState } from './state';

export const globalReducer = (
  state: GlobalState,
  action: GlobalActions
): GlobalState => {
  switch (action.type) {
    case ActionType.SetUser:
      return {
        ...state,
        user: {
          ...action.payload,
        },
      };

    case ActionType.RemoveUser:
      return {
        ...state,
        user: null,
      };

    case ActionType.UpdateProfile:
      return {
        ...state,
        user: {
          ...state.user,
          profile: { ...state.user.profile, ...action.payload },
        },
      };

    case ActionType.UpdateProfileCourses:
      return {
        ...state,
        user: {
          ...state.user,
          profile: {
            ...state.user.profile,
            courses: [...action.payload],
          },
        },
      };

    case ActionType.UpdateProfileJobs:
      return {
        ...state,
        user: {
          ...state.user,
          profile: {
            ...state.user.profile,
            employmentHistory: [...action.payload],
          },
        },
      };

    case ActionType.UpdateProfilePortfolio:
      return {
        ...state,
        user: {
          ...state.user,
          profile: {
            ...state.user.profile,
            portfolioItem: [...action.payload],
          },
        },
      };

    default:
      return state;
  }
};
