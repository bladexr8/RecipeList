// Redux Store to hold application state
import { createStore, compose } from 'redux';
import reducer from '../reducers/Reducer';

const store = createStore(reducer);

export default store;