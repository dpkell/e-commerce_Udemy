import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H7M64BYNXwr5TGN8DgHLs91pxD43MAzhILtBApD6dS4eaesYENqNXbPZp6E1KSk2usgUZWI48H2jjzQDldOV22J00ESjUqF0R';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful');
    };

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Crown Clothing Ltd.'
            image='https://sendeyo.com/up/d/f3eb2117da'
            billingAddress
            shippingAddress
            description= {`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );

};

export default StripeCheckoutButton;