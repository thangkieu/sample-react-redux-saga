import React from 'react';
import PropTypes from 'prop-types';
// import Route from 'react-router/Route';
// import Switch from 'react-router/Switch';

import { connect } from 'react-redux';

// import { requestUserInfo } from "containers/user/actions";
// import { logout } from 'containers/user/actions';

import 'styles/main.scss';

class LayoutContainer extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return <main className="main-wrapper ">{this.props.children}</main>;
  }
}

export default connect()(LayoutContainer);
