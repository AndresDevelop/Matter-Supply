import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { initialState } from './initialState';
import reducer from './reducer';
import StoreContext from './context';
import { token, login } from '../../utils/helpers';
import { AuthGit } from '../../api/dataRequestMethods';
import { getGitsUser, getUser } from '../../api/api';
import {
  FetchAllGists,
  ErrorFetch,
  LogIn,
  FetchUserInfo,
} from './actions';

function Store({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (login) {
      AuthGit(login).then(() => {});
    } else if (token) {
      getUser().then(({ data }) => {
        dispatch(FetchUserInfo(data));
        dispatch(LogIn(true));
        getGitsUser(data.login)
          .then((value) => {
            dispatch(FetchAllGists(value.data));
          })
          .catch((error) => {
            dispatch(ErrorFetch(error));
          });
      });
    }
  }, []);

  return (
    <StoreContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}
Store.propTypes = {
  children: PropTypes.element,
};
Store.defaultProps = {
  initialState,
};

export default Store;
