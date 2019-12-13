import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    //for proper charge to be made stripe wants cents value
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_Ix4SHvHNjnKjmqCSs6FtfzYk00uC7iObgc';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout label='Pay Now' name='CRWN Clothing Ltd.' billingAddress shippingAddress image='https://sendeyo.com/up/d/f3eb2117da' description={`Your total is $${price}`} amount={priceForStripe} panelLabel='Pay Now' token={onToken} stripeKey={publishableKey}/>
    )
}

export default StripeCheckoutButton;