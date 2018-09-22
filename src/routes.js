import React from 'react';
import Route from 'react-router/Route';
import Switch from 'react-router/Switch';
import { ConnectedRouter } from 'connected-react-router';
import Loadable from 'react-loadable';

import Loading from 'components/Loading';
import AuthRoute from 'containers/AuthRouteContainer';

const HeaderContainer = Loadable({
  loader: () => import(/* webpackChunkName: "headercontainer" */ 'containers/HeaderContainer'),
  loading: Loading
});

const LayoutContainer = Loadable({
  loader: () => import(/* webpackChunkName: "layoutcontainer" */ 'containers/LayoutContainer'),
  loading: Loading
});

const HomePageContainer = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ 'containers/HomePageContainer'),
  loading: Loading
});

const LoginPageContainer = Loadable({
  loader: () => import(/* webpackChunkName: "loginpage" */ 'containers/LoginPageContainer'),
  loading: Loading
});

const MainRoute = props => (
  <ConnectedRouter {...props}>
    <div className="app-wrapper">
      <HeaderContainer />

      <Switch>
        <Route
          render={() => (
            <LayoutContainer>
              <Switch>
                <Route exact path="/login" component={LoginPageContainer} />
                <AuthRoute exact path="/" component={HomePageContainer} />
              </Switch>
            </LayoutContainer>
          )}
        />
      </Switch>
    </div>
  </ConnectedRouter>
);

export default MainRoute;
