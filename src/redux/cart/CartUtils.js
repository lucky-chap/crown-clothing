// Utility functions allow us to keep our files clean and organize
// functions that we may need in multiple files in one location

export const addItemToCart = (cartItems, cartItemToAdd) => {
  // The below code determines if in the cartItems, there is a cartItem
  // with the same id as the cartItem to be added
  // if nothing is found existingCartItem will be null
 const existingCartItem = cartItems.find(
   cartItem => cartItem.id === cartItemToAdd.id
 );

 if (existingCartItem) {
   return cartItems.map(cartItem =>
     cartItem.id === cartItemToAdd.id
       ? { ...cartItem, quantity: cartItem.quantity + 1 }
       : cartItem
   );
 }

 return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};



export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if(existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }
 
  return cartItems.map(
    cartItem => cartItem.id === cartItemToRemove.id 
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem
  )

}
