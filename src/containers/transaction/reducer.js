import * as c from './constants';

const initState = {
  submittingTransactionRequest: false,
  statement: null,
  transactions: null
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case c.SUBMIT_TRANSACTION_REQUEST:
      return {
        ...state,
        submittingTransactionRequest: true
      };

    case c.SUBMIT_TRANSACTION_REQUEST_SUCCESS:
      return {
        ...state,
        submittingTransactionRequest: false,
        statement: action.payload
      };

    case c.SUBMIT_TRANSACTION_REQUEST_FAILURE:
      return {
        ...state,
        submittingTransactionRequest: false
      };

    case c.FETCH_TRANSACTIONS:
      return {
        ...state,
        fetchingTransactions: true
      };

    case c.FETCH_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        fetchingTransactions: false,
        transactions: action.payload
      };

    case c.FETCH_TRANSACTIONS_FAILURE:
      return {
        ...state,
        fetchingTransactions: false
      };

    default:
      return state;
  }
};

export default reducer;
