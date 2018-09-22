import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';

import MainRoute from './routes';
import rootSaga from 'containers/root-saga';

import store, { sagaMiddleware, history } from './store';
import NProgress from 'nprogress';

import 'styles/main.scss';
import 'nprogress/nprogress.css';

import { requestUserInfo } from 'containers/user/actions';

sagaMiddleware.run(rootSaga);

class App extends React.PureComponent {
  constructor(p) {
    super(p);

    this.state = {
      loading: true
    };

    this.prevState = null;

    this.handleStateChange = this.handleStateChange.bind(this);
    store.subscribe(this.handleStateChange);
    store.dispatch(requestUserInfo());
    NProgress.set(0.4);
  }

  handleStateChange() {
    const currentState = store.getState();

    if (
      this.prevState &&
      this.prevState.user.requestingUserInfo !== currentState.user.requestingUserInfo &&
      currentState.user.requestingUserInfo === false
    ) {
      // called user info
      this.setState({ loading: false });
      NProgress.done(true);
    }

    this.prevState = currentState;
  }

  render() {
    if (this.state.loading) {
      return null;
    }

    return (
      <Provider store={store}>
        <MainRoute history={history} />
      </Provider>
    );
  }
}

export default hot(module)(App);
