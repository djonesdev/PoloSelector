import { combineReducers } from 'redux';

import{ carsReducer as cars } from './carsReducer';

export default combineReducers({
    cars
});