import {
  FETCH_ALL_GIST,
  FETCH_GITS_DETAIL,
  ERROR_FETCH,
  FETCH_USER_INFO,
  LOG_IN,
} from './types';

export const FetchAllGists = user => ({ type: FETCH_ALL_GIST, payload: user });
export const FetchGitsDetail = id => ({ type: FETCH_GITS_DETAIL, payload: id });
export const ErrorFetch = () => ({ type: ERROR_FETCH });
export const FetchUserInfo = user => ({ type: FETCH_USER_INFO, payload: user });
export const LogIn = log => ({ type: LOG_IN, payload: log });
