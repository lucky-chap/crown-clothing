import { CartTypes } from './CartTypes';
import { addItemToCart, removeItemFromCart } from './CartUtils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}


const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }

    case CartTypes.ADD_ITEM:
      return {
        ...state,
        // This was the code before addItemToCart in CartUtils was added
        // cartItems: [...state.cartItems, action.payload]
        cartItems: addItemToCart(state.cartItems, action.payload)
      }

    case CartTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }  
    
    case CartTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => 
          cartItem.id !== action.payload.id
          )
      }  

    default:
        return state;
  }
}

export default cartReducer;
