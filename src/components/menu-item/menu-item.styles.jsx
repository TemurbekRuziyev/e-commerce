import styled, { css } from 'styled-components';

const LargeItem = css`
  height: 380px;

  @media only screen and (max-width: 60.625em) {
    height: 240px;
  }
`;

const SizeClass = props => {
  if (props.size) return LargeItem;
};

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000000;
  margin: 0 7.5px 15px;
  position: relative;
  overflow: hidden;
  ${SizeClass};

  &:hover {
    cursor: pointer;
  }

  &:hover .background-image {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  &:hover .content {
    opacity: 0.9;
  }

  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }

  @media only screen and (max-width: 60.625em) {
    width: 45%;
  }
`;

export const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
`;

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;

  position: absolute;
`;

export const TitleContainer = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const SubtitleContainer = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
