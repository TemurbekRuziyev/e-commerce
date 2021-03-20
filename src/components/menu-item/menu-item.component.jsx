import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImage,
  ContentContainer,
  SubtitleContainer,
  TitleContainer,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImage
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></BackgroundImage>
    <ContentContainer className='content'>
      <TitleContainer> {title.toUpperCase()} </TitleContainer>
      <SubtitleContainer >SHOP NOW</SubtitleContainer>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
