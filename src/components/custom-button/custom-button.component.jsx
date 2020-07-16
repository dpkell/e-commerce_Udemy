import React from 'react';

import './custom-button.styles.scss';

// This component receives the children elements of the form and any other necessary properties (such as type) and acts upon it based upon
// relative properties; such as type="submit" that is supplied via the ...otherProps spread operator.
const CustomButton = ({children, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;