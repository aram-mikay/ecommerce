export const addItemToCart = (cartItems, cartItemToAdd) => {
  const exisitngCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (exisitngCartItem) {
    //returning new array so our components know to re-render prop
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
    
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};

//grouping our cart items based on quantity value