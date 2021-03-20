import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ArrowContainer,
  Image,
  ImageContainer,
  QuantityContainer,
  ValueContainer,
  RemoveButton,
  TextStyles,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt='Item' />
      </ImageContainer>
      <TextStyles> {name}</TextStyles>
      <QuantityContainer>
        <ArrowContainer onClick={() => removeItem(cartItem)}>
          &#10094;
        </ArrowContainer>
        <ValueContainer> {quantity} </ValueContainer>
        <ArrowContainer onClick={() => addItem(cartItem)}>
          &#10095;
        </ArrowContainer>
      </QuantityContainer>
      <TextStyles>{price}</TextStyles>
      <RemoveButton onClick={() => clearItem(cartItem)}>
        {' '}
        &#10005;{' '}
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
