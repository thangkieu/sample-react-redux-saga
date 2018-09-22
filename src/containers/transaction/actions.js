import * as c from './constants';

export const submitTransactionRequest = data => ({
  type: c.SUBMIT_TRANSACTION_REQUEST,
  data
});

export const fetchTransactions = (params = { offset: 0, limit: 10 }) => ({
  type: c.FETCH_TRANSACTIONS,
  params
});
