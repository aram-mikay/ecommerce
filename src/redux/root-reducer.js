//base object representing all state in our application

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';


export default combineReducers({
    //key going to actual reducer we're looking for
    
    user: userReducer
})