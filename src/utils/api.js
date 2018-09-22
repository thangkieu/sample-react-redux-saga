import { TOKEN_NAME } from 'containers/user/constants';
import store from '../store';
import { logout } from 'containers/user/actions'
export const callApi = (path, method, data) => {
  const token = localStorage.getItem(TOKEN_NAME);
  const customHeader = {};
  if (token) {
    customHeader['Authorization'] = token;
  }

  return fetch(path, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...customHeader
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.status === 401) {
        store.dispatch(logout())
        // localStorage.removeItem(TOKEN_NAME);
      }

      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        var error = new Error(response.statusText);
        error.response = response;

        throw error;
      }
    })
    .then(response => response.json());
};
