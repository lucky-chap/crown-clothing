import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';

import './header.scss';

import { auth } from '../../firebase/firebase.config';

const Header = ({ currentUser }) => (
  <div className='header'>

    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>

    <div className='options'>
      <Link to='/shop' className='option'>SHOP</Link>
      <Link to='/contact' className='option'>CONTACT</Link>
      {
        currentUser ?
        <div className='option' onClick={ () => auth.signOut() }>SIGN OUT</div>
        :
        <Link to='/signin' className='option'>SIGN IN</Link>
      }
    </div>

  </div>
)


// state now refers to the root reducer, and user is the key used to identify the user reducer
// now currentUser is passed as a prop to Header
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})


export default connect(mapStateToProps)(Header);
