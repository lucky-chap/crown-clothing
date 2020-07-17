import { CartTypes } from './CartTypes';

export const toggleCartHidden = () => ({
  type: CartTypes.TOGGLE_CART_HIDDEN
  // We dont need a paylod in this
})

export const addItem = item => ({
  type: CartTypes.ADD_ITEM,
  payload: item
})
