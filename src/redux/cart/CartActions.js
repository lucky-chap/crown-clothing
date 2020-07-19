import { CartTypes } from './CartTypes';

export const toggleCartHidden = () => ({
  type: CartTypes.TOGGLE_CART_HIDDEN
  // We dont need a paylod in this
})

export const addItem = item => ({
  type: CartTypes.ADD_ITEM,
  payload: item
})

export const removeItem = item => ({
  type: CartTypes.REMOVE_ITEM,
  payload: item
})


export const clearItemFromCart = item => ({
  type: CartTypes.CLEAR_ITEM_FROM_CART,
  payload: item
})