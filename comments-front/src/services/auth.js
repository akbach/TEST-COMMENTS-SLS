import store from '../store/store';
import { getApiClient } from './api.client';

const backendEndpoint = import.meta.env.VITE_BACKEND_URL + '/auth/login';

export const localInfo = () => {
  const user = localStorage.user;
  if (user) {
    try {
      store.commit('SET_USER', JSON.parse(user));
    } catch (e) {
      localStorage.user = null;
      console.error(e);
    }
  }
};

export const userLogin = async (token, provider) => {
  const { data: user } = await getApiClient().post(backendEndpoint, {
    token,
    provider,
  });
  localStorage.user = JSON.stringify(user);
  store.commit('SET_USER', user);
};

export const userLogout = () => {
  localStorage.user = null;
  store.commit('SET_USER', {});
};

export const deleteCookie = (name) => {
  const expiration = '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  document.cookie = name + expiration;
};
