import { createSelector } from 'reselect';


//input selector - func that takes state and returns slice of state
//what we're requesting here is the cart from our store state ONLY
const selectCart = state => state.cart;


//memoized selector since we used createSelector
//first arg is a collection of input selectors. second arg is func that returns value we want out of selector
//returns each output of input selectors in array in the order we stated
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumalatedQuantity, cartItems) =>
                accumalatedQuantity + cartItems.quantity, 0
        )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce(
        (accumalatedQuantity, cartItems) =>
            accumalatedQuantity + cartItems.quantity * cartItems.price, 0
    )

)