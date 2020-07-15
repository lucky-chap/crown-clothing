import React from 'react';

import './custom-button.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  // ...otherProps was passed in to have type='submit'
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
)


export default CustomButton;
