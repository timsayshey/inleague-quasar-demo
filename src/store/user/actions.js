import * as api from '../../api/user';

export async function authenticate({ commit }, payload) {
  let res = await api.authenticate(payload);
  if (res !== undefined) {
    commit('set', res.data.data);
    return true;
  }
  return false;
}
