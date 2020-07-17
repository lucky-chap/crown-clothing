import { CartTypes } from './CartTypes';
import { addItemToCart } from './CartUtils';

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

    default:
        return state;
  }
}

export default cartReducer;
