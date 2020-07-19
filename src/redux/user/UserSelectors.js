import { createSelector } from 'reselect';

// 'user' here refers to the key that points to user_reducer in RootReducer.js
const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)