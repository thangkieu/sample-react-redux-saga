import * as c from './constants';

export const signIn = payload => ({ type: c.SIGN_IN, payload });
export const signInFailure = errors => ({ type: c.SIGN_IN_FAILURE, errors });
export const signInSuccess = payload => ({ type: c.SIGN_IN_SUCCESS, payload });

export const requestUserInfo = () => ({ type: c.REQUEST_USER_INFO });
export const requestUserInfoFailure = errors => ({ type: c.REQUEST_USER_INFO_FAILURE, errors });
export const requestUserInfoSuccess = payload => ({ type: c.REQUEST_USER_INFO_SUCCESS, payload });

export const logout = () => ({ type: c.LOGOUT });
export const logoutFailure = errors => ({ type: c.LOGOUT_FAILURE, errors });
export const logoutSuccess = () => ({ type: c.LOGOUT_SUCCESS });
