// USIGN MEMOIZATION FOR OPTIMIZATION
// There are two types of selectors; Input Selectors, which do not use the createSelector function,
// and there's also Output Selectors, that uses Input Selctors and the createSelector function
// to build itself

// createSelector() takes two arguments, first is a collection or an array pointing to 
// the slice of state you want, and the second argument is a function that returns the value we want out 
// of this collection or selector.
// The parameters of the function are the outputs of each collection or array,
// placed in the order of which the collections are arranged 
// Example:
    // const selectCart = state => state.cart;
    // const selectUser = state => state.user;
    // export const selectCartItems = createSelector(
    //     [selectCart, selectUser],
    //     (cart, user) => cart.items + user.items
    // )

import { createSelector } from 'reselect';

// Starting with the first type of selector, INPUT SELECTOR
// This only takes a part of state, specifically the cart and returns a slice or part of it
// The naming convention is usually selectCart or cartSelector, but imma use selectCart
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)


// The second type of selectors, OUTPUT SELECTOR uses an INPUT SELECTOR
// An example is below
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity
    ,0)
)


