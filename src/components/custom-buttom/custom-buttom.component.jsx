import React from 'react';

import './custom-buttom.styles.scss'

const CustomButtom = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}`}
      {...otherProps}>
      {children}
    </button>
  )
};

export default CustomButtom;
