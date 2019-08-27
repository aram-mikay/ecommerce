//function that takes two properties, previous state and action


//represents the initial state of this reducer
const INITIAL_STATE = {
    currentUser: null
}

//state = INITIAL_STATE default value ES6 syntax, if state is not set the default paramater will be set

const userReducer = (state = INITIAL_STATE, action) =>
{

    //every reducer receives every action that gets fired, even if it's irrelevant, the reason we return state by defualt is because none of the actions may match the type we are looking for
    switch (action.type)
    {
        case 'SET_CURRENT_USER':
            return {
                //spreading state
                ...state,
                currentUser: action.payload
                //payload contains the value we want to set.

            }
            
        default:
            return state;
    }
}


export default userReducer;