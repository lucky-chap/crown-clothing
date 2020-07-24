import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	// price is multiplied by 100 because stripe requires for the money to be in cents
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51H8D81FsZcaq8azFUNNb0Q3HVXVbcinGrfKDhtGMMpWoRdnwPRCxZd2mw0ff5x57pvi5ATT2pfF6XYFYmNhryjfz00UOXIvdEM';


	const onToken = token => {
		console.log(token);
		alert('Payment Successful')
	}


  return (
    <StripeCheckout
	  label='Pay Now'
	  name='CRWN Clothing Ltd.'
	  billingAddress
	  shippingAddress
	  image='https://svgshare.com/i/CUz.svg'
	  description={`Your total is $${price}`}
	  amount={priceForStripe}
	  panelLabel='Pay Now'
	  token={onToken}
	  stripeKey={publishableKey}
    />
  )

}

export default StripeCheckoutButton;