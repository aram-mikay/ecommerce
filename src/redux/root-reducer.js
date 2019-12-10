//base object representing all state in our application

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//retrieving localStorage from our browser ,can also import sessionStorage from another path
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    //stating what point we want to start storing in our reducer object
    key: 'root',
    storage,
    whitelist: ['cart']
    //containing string names of any reducer we want to store
    //passed cart because our user is being stored by firebase

}

const rootReducer = combineReducers({
    //keys going to actual reducer we're looking for
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
//returing modified version of our rootReducer with persistConfig wrapping it