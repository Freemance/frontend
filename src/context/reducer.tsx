import { ActionType, GlobalActions } from './actions';
import { GlobalState } from './state';

export const globalReducer = (
  state: GlobalState,
  action: GlobalActions
): GlobalState => {
  switch (action.type) {
    case ActionType.LoginUser:
      return {
        ...state,
        user: {
          ...state.user,
        },
      };

    default:
      return state;
  }
};
