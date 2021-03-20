import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  CollectionItemButton,
  CollectionFooterContainer,
  ImageContainer,
  CollectionItemName,
  CollectionItemPrice,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;

  return (
    <CollectionItemContainer>
      <ImageContainer
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CollectionFooterContainer>
        <CollectionItemName> {name} </CollectionItemName>
        <CollectionItemPrice> {price} </CollectionItemPrice>
      </CollectionFooterContainer>
      <CollectionItemButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CollectionItemButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
