import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { replace } from 'connected-react-router';
import Route from 'react-router/Route';

class AuthRouteContainer extends React.Component {
  static propTypes = {
    userInfo: PropTypes.object,
    redirect: PropTypes.func
  };

  constructor(p) {
    super(p);

    const { userInfo } = this.props;

    if (!userInfo || !userInfo.id) {
      p.redirect('/login');
    }
  }

  render() {
    const { userInfo, ...rest } = this.props;
    if (!userInfo || !userInfo.id) {
      return null;
    }

    return <Route {...rest} />;
  }
}

export default connect(
  state => ({
    userInfo: state.user.info
  }),
  dispatch => ({
    redirect: url => dispatch(replace(url))
  })
)(AuthRouteContainer);
