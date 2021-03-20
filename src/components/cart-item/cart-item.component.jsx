import React from 'react';

// import './cart-item.styles.css';
import {
  CartItemContainer,
  CartItemImage,
  CartName,
  ItemDetails,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='Name' />
    <ItemDetails>
      <CartName>{name}</CartName>
      <span>
        {quantity} &times; ${price}
      </span>
    </ItemDetails>
  </CartItemContainer>
);

export default React.memo(CartItem);
