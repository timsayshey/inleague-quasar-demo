import { api } from './config';

export async function authenticate({ username, password }) {
  var bodyFormData = new FormData();
  bodyFormData.set('username', username);
  bodyFormData.set('password', password);

  let res = await api({
    url: 'authenticate',
    method: 'post',
    data: bodyFormData,
    headers: { 'Content-Type': 'multipart/form-data' }
  });

  return res;
}
