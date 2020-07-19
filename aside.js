// ===================
// THESE ARE NOTES THAT COULDN'T BE ILLUSTRATED IN THE ACTUAL CODE
// ===================

// === For CartDropdown.jsx ===
// Number 1
// If you do not write the matchDispatchToProps function, connect should look like this
// import { connect } from 'react-router';
// export default connect(mapStateToProps)(CartDropdown)

// And now for the component going to use the dispatch,
// you now pass it a prop of dispatch
// If the dispatch is activated by an onClick, this is how it should be:
// onClick{ () => dispatch(toggleCartHidden()) }
// where toggleCartHidden() is the action you will import like so:
// import { toggleCartHidden } from './mom' :)