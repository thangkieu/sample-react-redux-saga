import { push } from 'connected-react-router';
import { delay } from 'redux-saga';
import { put, takeLatest, call, all } from 'redux-saga/effects';
import { SIGN_IN, REQUEST_USER_INFO, LOGOUT, TOKEN_NAME } from './constants';
import { callApi } from 'utils/api';
import { parseErrors } from 'utils/helpers';
import notification from 'utils/notification';

import {
  signInFailure,
  signInSuccess,
  requestUserInfoSuccess,
  requestUserInfoFailure,
  logoutSuccess,
  logoutFailure
} from './actions';

function* signIn(action) {
  try {
    // const resp = yield call(callApi, `${process.env.API_URL}/users/signin`, 'post', action.data);
    // const token = resp.msg.token;
    localStorage.setItem(TOKEN_NAME, 'token');

    // const userResp = yield call(callApi, `${process.env.API_URL}/me`, 'get');
    yield put(
      signInSuccess({
        id: 12,
        full_name: 'John Persons',
        lastLogin: 1537159596882
      })
    );

    yield put(push('/'));
  } catch (error) {
    const errors = yield parseErrors(error);

    yield put(signInFailure(errors));
    notification.error(errors.join(', '));
  }
}

function* requestUserInfo() {
  // mock code to check login
  const token = localStorage.getItem(TOKEN_NAME);
  // const userResp = yield call(callApi, `${process.env.API_URL}/me`, 'get');
  yield delay(1000);
  if (token) {
    yield put(
      requestUserInfoSuccess({
        id: 12,
        full_name: 'John Persons',
        lastLogin: 1537159596882
      })
    );
  } else {
    yield put(requestUserInfoFailure());
  }
}

function* logout() {
  try {
    localStorage.removeItem(TOKEN_NAME);

    yield put(push('/login'));
    yield put(logoutSuccess());
  } catch (error) {
    const errors = yield parseErrors(error);

    yield put(logoutFailure(errors));
  }
}

export function* watchSignIn() {
  yield takeLatest(SIGN_IN, signIn);
}

export function* watchRequestUserInfo() {
  yield takeLatest(REQUEST_USER_INFO, requestUserInfo);
}

export function* watchLogout() {
  yield takeLatest(LOGOUT, logout);
}

export default function* userSaga() {
  yield all([watchSignIn(), watchRequestUserInfo(), watchLogout()]);
}
