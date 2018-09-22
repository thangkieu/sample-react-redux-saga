import * as c from './constants';

const initState = {
  info: null,
  signingIn: false,
  signInErrors: null,
  requestingUserInfo: false,
  requestUserInfoErrors: null,
  logginOut: false,
  logoutError: null
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case c.SIGN_IN:
      return {
        ...state,
        signingIn: true,
        signInErrors: null
      };

    case c.SIGN_IN_SUCCESS:
      return {
        ...state,
        signingIn: false,
        signInErrors: null,
        info: action.payload
      };

    case c.SIGN_IN_FAILURE:
      return {
        ...state,
        signingIn: false,
        info: null
      };

    case c.REQUEST_USER_INFO:
      return {
        ...state,
        requestingUserInfo: true,
        requestUserInfoErrors: null
      };

    case c.REQUEST_USER_INFO_SUCCESS:
      return {
        ...state,
        info: action.payload,
        requestingUserInfo: false,
        requestUserInfoErrors: null
      };

    case c.REQUEST_USER_INFO_FAILURE:
      return {
        ...state,
        requestingUserInfo: false,
        requestUserInfoErrors: action.errors
      };

    case c.LOGOUT:
      return {
        ...state,
        logginOut: true,
        logoutError: null
      };

    case c.LOGOUT_SUCCESS:
      return {
        ...state,
        info: null,
        logginOut: false,
        logoutError: null
      };

    case c.LOGOUT_FAILURE:
      return {
        ...state,
        logginOut: false,
        logoutError: action.errors
      };

    default:
      return state;
  }
};

export default reducer;
