import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    //exact same string our reducer is expecting make sure they match to create appropriate effects in our reducer
    payload: user
});