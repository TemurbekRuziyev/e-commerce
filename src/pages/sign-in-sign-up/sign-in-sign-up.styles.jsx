import styled from 'styled-components';

export const SignInSignUp = styled.div`
  max-width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media only screen and (max-width: 60.625em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
