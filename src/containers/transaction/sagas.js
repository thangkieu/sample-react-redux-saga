// import { delay } from 'redux-saga';
import qs from 'qs';
import { takeLatest, all, put, call } from 'redux-saga/effects';
import * as c from './constants';
import { parseErrors } from 'utils/helpers';
import { callApi } from 'utils/api';
import notification from 'utils/notification';

function* submitTransactionRequest(action) {
  try {
    const resp = yield call(callApi, `${process.env.API_URL}/transfers`, 'post', action.data);

    yield put({
      type: c.SUBMIT_TRANSACTION_REQUEST_SUCCESS,
      payload: resp
    });
    notification.success('Transfer successful');
  } catch (error) {
    const errors = yield parseErrors(error);
    notification.error(errors.join(', '));
  }
}

function* fetchTransactions(action) {
  console.log('call transactions');
  try {
    const resp = yield call(
      callApi,
      `${process.env.API_URL}/transfers?${qs.stringify(action.params)}`,
      'get'
    );

    yield put({
      type: c.FETCH_TRANSACTIONS_SUCCESS,
      payload: resp
    });
    notification.success('Fetch transaction list successful');
  } catch (error) {
    const errors = yield parseErrors(error);
    notification.error(errors.join(', '));
  }
}

function* watchSubmitTransactionRequest() {
  yield takeLatest(c.SUBMIT_TRANSACTION_REQUEST, submitTransactionRequest);
}

function* watchFetchTransactions() {
  yield takeLatest(c.FETCH_TRANSACTIONS, fetchTransactions);
}

export default function* sagas() {
  yield all([watchSubmitTransactionRequest(), watchFetchTransactions()]);
}
