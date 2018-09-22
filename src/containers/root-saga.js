import { all } from 'redux-saga/effects';
import userSaga from 'containers/user/sagas';
import transactionSaga from 'containers/transaction/sagas';

export default function* root() {
  yield all([userSaga(), transactionSaga()]);
}
