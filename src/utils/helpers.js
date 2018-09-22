import qs from 'qs';
export const parseQuery = (queryStr = '') => {
  const str = queryStr.replace(/^\?/, '');

  return qs.parse(str);
};

export const parseErrors = function*(resp) {
  let errorData;
  let errors;
  if (resp.response && resp.response.status === 400) {
    errorData = yield resp.response.json();
    errors = [errorData.msg];
  } else {
    errors = ['Something went wrong, please try again later'];
  }

  return errors;
};
