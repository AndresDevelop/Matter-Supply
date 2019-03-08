import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { initialState } from './initialState';
import reducer from './reducer';
import StoreContext from './context';

function Store({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

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
