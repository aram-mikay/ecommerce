export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    //exact same string our reducer is expecting make sure they match to create appropriate effects in our reducer
    payload: user
});