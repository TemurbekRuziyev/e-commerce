import React from 'react';

import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false,
      info: null,
    };
  }

  static getDerivedStateFromError(error) {
    //Do something
    return { hasErrored: true };
  }
  
  componentDidCatch(error, info) {
    this.setState({ info: info });
    console.log(error, info);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/U3vTGjX.png' />
          <ErrorImageText>
            Something Went Wrong
            <br />
            <br />
            {this.state.info}
          </ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
