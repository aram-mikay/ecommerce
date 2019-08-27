import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
//middleware

import rootReducer from './root-reducer';


//middleware that the store is expecting from redux is going to be an array

const middlewares = [logger];

//taking rootReducer and array of middlewares containing our loggers
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;