import React from 'react';


import { CustomButtonContainer } from './custom-button.styles';

// This component receives the children elements of the form and any other necessary properties (such as type) and acts upon it based upon
// relative properties; such as type="submit" that is supplied via the ...otherProps spread operator.
const CustomButton = ({children, ...otherProps}) => (
    <CustomButtonContainer  {...otherProps} >
        {children}
    </CustomButtonContainer>
);

export default CustomButton;