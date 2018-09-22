import React from 'react';
import { connect } from 'react-redux';

import HomePage from 'pages/HomePage';

class HomePageContainer extends React.PureComponent {
  render() {
    return <HomePage {...this.props} />;
  }
}

export default connect()(HomePageContainer);
