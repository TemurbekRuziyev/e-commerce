import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

import {
  SignInContainer,
  TextHeader,
  ButtonsContainer,
  SpanText,
  CustomBtn
} from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = e => {
    const { value, name } = e.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <TextHeader>I already have an account</TextHeader>
      <SpanText>Sign in with your email and password</SpanText>
      <form action='#' onSubmit={handleSubmit}>
        <FormInput
          type='email'
          value={email}
          name='email'
          handleChange={handleChange}
          required
          label='Email'
        />
        <FormInput
          type='password'
          value={password}
          name='password'
          handleChange={handleChange}
          required
          label='Password'
        />
        <ButtonsContainer>
          <CustomBtn type='submit'>Sign In</CustomBtn>
          <CustomBtn
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomBtn>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
