import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';

export const SignInContainer = styled.div`
  width: 38rem;
  display: flex;
  flex-direction: column;
`;

export const TextHeader = styled.h2`
  margin: 1rem 0;
  font-size: 2.5rem;
  @media only screen and (max-width: 60.625em) {
    font-size: 2.2rem;
  }
`;

export const SpanText = styled.span`
  font-size: 1.7rem;

  
  @media only screen and (max-width: 60.625em) {
    font-size: 1.6rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;


export const CustomBtn = styled(CustomButton)`
    width: 40%;
    margin: 0 auto;
`;
