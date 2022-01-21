import React from 'react';

import './custom-buttom.styles.scss'

const CustomButtom = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <div
      className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}`}
      {...otherProps}>
      {children}
    </div>
  )
};

export default CustomButtom;
