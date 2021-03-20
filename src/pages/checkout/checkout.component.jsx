import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalText,
  WarningText,
  SpanText,
} from './checkout.styles';

const CheckoutPage = ({ cartItems, totalPrice }) => (
  <CheckoutContainer>
    <CheckoutHeader>
      <HeaderBlock>
        <SpanText>Product</SpanText>
      </HeaderBlock>
      <HeaderBlock>
        <SpanText>Description</SpanText>
      </HeaderBlock>
      <HeaderBlock>
        <SpanText>Quantity</SpanText>
      </HeaderBlock>
      <HeaderBlock>
        <SpanText>Price</SpanText>
      </HeaderBlock>
      <HeaderBlock>
        <SpanText>Remove</SpanText>
      </HeaderBlock>
    </CheckoutHeader>
    {cartItems.map(item => (
      <CheckoutItem key={item.id} cartItem={item} />
    ))}
    <TotalText>TOTAL: ${totalPrice}</TotalText>
    <WarningText>
      *Please use the following credit cart for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
    </WarningText>
    <StripeCheckoutButton price={totalPrice} />
  </CheckoutContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
