import React from 'react';
import './cart-dropdown.scss';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { toggleCartHidden } from '../../redux/cart/CartActions';

import { selectCartItems } from '../../redux/cart/CartSelectors';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      { cartItems.length ? 
        cartItems.map(cartItem => (<CartItem id={cartItem.id} key={cartItem.id} item={cartItem} />))
        : <span className='empty-message'>Your cart is empty</span>
      }
    </div>
      <CustomButton onClick={() =>
       {history.push('/checkout');
        toggleCartHidden();
       }
       }>
         GO TO CHECKOUT
      </CustomButton>
  </div>
)

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
})

// If you eliminate the function below, and in place of mapDispatchToProps in the connect
// function you leave it empty, you will still have access to the dispatch prop
// Refer to aside.js in the root folder for more information (Number 1)
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown))