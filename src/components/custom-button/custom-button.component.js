import React from 'react';

import './custom-button.styles.scss';


const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    //conditional style rending depending on google button or not
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
    </button>
)

export default CustomButton;