import React from 'react';

import './signup-and-login.scss';

import SignIn from '../../components/Sign-in/Sign-in';
import SignUp from '../../components/Sign-up/Sign-up';

const SignInAndSignUp = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
)


export default SignInAndSignUp;
