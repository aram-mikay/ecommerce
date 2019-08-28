import { createSelector } from 'reselect';


//input selector - func that takes state and returns slice of state
//what we're requesting here is the cart from our store state ONLY
const selectCart = state => state.cart;


//memoized selector since we used createSelector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumalatedQuantity, cartItems) =>
                accumalatedQuantity + cartItems.quantity, 0
        )
);