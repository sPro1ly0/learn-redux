import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer // giving a name you like option
});

export default allReducers;

// counterReducer --> counterReducer: counterReducer