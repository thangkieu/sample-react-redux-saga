import React from 'react';
import { connect } from 'react-redux';

import Header from 'components/Header';

class HeaderContainer extends React.PureComponent {
  render() {
    return <Header {...this.props} />;
  }
}

export default connect(state => ({
  userInfo: state.user.info
}))(HeaderContainer);
