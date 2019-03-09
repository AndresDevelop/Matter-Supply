import {
  FETCH_ALL_GIST,
  FETCH_GITS_DETAIL,
  ERROR_FETCH,
  FETCH_USER_INFO,
  LOG_IN,
} from './types';
import { initialState } from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_GIST:
      return { ...state, gits: action.payload };

    case FETCH_GITS_DETAIL:
      return { ...state, git: action.payload };
    default:
      return state;

    case ERROR_FETCH:
      return { ...state, message: true };

    case FETCH_USER_INFO:
      return { ...state, user: action.payload };

    case LOG_IN:
      return { ...state, logging: !state.logging };
  }
};

export default reducer;
