<<<<<<< HEAD
import React from "react";
=======
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
>>>>>>> 9241494... Added functionality to view current authenticated user
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";

// import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from "../../redux/cart/CartSelectors";
import { selectCurrentUser } from "../../redux/user/UserSelectors";

import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

import "./header.scss";

import { auth } from "../../firebase/firebase.config";

const Header = ({ currentUser, hidden }) => {
  console.log(currentUser);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <Fragment>
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
            <div className="option userName">
              {currentUser.displayName.split(" ")[0].toLowerCase()}
            </div>
          </Fragment>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

// state now refers to the root reducer, and user is the key used to identify the user reducer
// now currentUser is passed as a prop to Header
// The above snippet is outdated, now i use selectors here to only update parts of the state instead
const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state)
});

// THE ABOVE mapStateToProps CAN ALSO BE WRITTEN LIKE SO, USING THE
// createStructuredSelector() function FROM 'reselect' LIBRARY
// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
//   hidden: selectCartHidden
// })

export default connect(mapStateToProps, null)(Header);
