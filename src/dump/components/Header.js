import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';

const Header = ({ userInfo }) => (
  <header>
    <div className="container">
      <div className="d-flex align-items-center justify-content-between">
        <Link to="/" className="h4 mb-0 logo-text text-white text-uppercase">
          <strong>BotChain</strong>
        </Link>

        {userInfo && userInfo.id && <p>User info</p>}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  userInfo: PropTypes.object
};

export default Header;
