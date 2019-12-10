import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
//storing data on localStorage can also be done using our window object and stringify/parsing JSON
import logger from 'redux-logger';
//middleware

import rootReducer from './root-reducer';


//middleware that the store is expecting from redux is going to be an array

const middlewares = [logger];

//taking rootReducer and array of middlewares containing our loggers
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

 export const persistor = persistStore(store);
//creating new persisted version of our store using persistor object
export default {store, persistor};