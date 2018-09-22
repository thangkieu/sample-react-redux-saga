import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';

import LoginPage from 'pages/LoginPage';

import { signIn, resetLoginStatus, requestUserInfo } from 'containers/user/actions';

class LoginPageContainer extends React.PureComponent {
  static propTypes = {
    onResetLoginStatus: PropTypes.func,
    requestingUserInfo: PropTypes.bool,
    userInfo: PropTypes.object,
    redirectToDashboard: PropTypes.func
  };

  constructor(p) {
    super(p);

    this.state = {
      loading: true
    };

    if (!p.userInfo) {
      p.onRequestUserInfo();
    } else if (p.userInfo.id) {
      this.props.redirectToDashboard();
    }
  }

  componentDidUpdate(prevProps) {
    if (!this.props.requestingUserInfo) {
      if (
        this.props.requestingUserInfo !== prevProps.requestingUserInfo &&
        (this.props.userInfo && this.props.userInfo.id)
      ) {
        // redirect to dashboard
        this.props.redirectToDashboard();
      } else {
        this.setState({ loading: false });
      }
    }
  }

  componentWillUnmount() {
    // this.props.onResetLoginStatus();
  }

  render() {
    return <LoginPage {...this.props} />;
  }
}

export default connect(
  state => ({
    userInfo: state.user.info,
    signingIn: state.user.signingIn,
    errors: state.user.signInErrors,
    requestingUserInfo: state.user.requestingUserInfo
  }),
  dispatch => ({
    onRequestUserInfo: () => dispatch(requestUserInfo()),
    redirectToDashboard: () => dispatch(replace('/')),
    onSignIn: data => dispatch(signIn(data)),
    onResetLoginStatus: () => dispatch(resetLoginStatus())
  })
)(LoginPageContainer);
