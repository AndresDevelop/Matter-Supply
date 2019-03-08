import { createContext } from 'react';
import { initialState } from './initialState';

const StoreContext = createContext(initialState);

export default StoreContext;
