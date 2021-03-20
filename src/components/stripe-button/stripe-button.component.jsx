import React from 'react';
import StripeButton from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = 100 * price;
  const publishableKey =
    'pk_test_51IO5OBAkiXt2qprphnG1MRBUbA7lO40TurxA0bgDHN8ep8t8dZnoxYaxpeSsenAIrEYlWMc5UFbD6j737BPlbTnG00jKICvOXe';

  const onToken = token => {
    console.log(token);
    alert('Your payment is successful');
  };

  return (
    <StripeButton
      name='E-commerce'
      description={`Your total money is $${price}`}
      label='Pay Now'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
