import axios from 'axios';
import store from '@/store/store.js';

export const getApiClient = () => {
  const config = {
    baseURL: import.meta.env.VITE_BACKEND_URL,
    responseType: 'json',
  };
  if (store.state.user && store.state.user.token) {
    config.headers = { Authorization: `Bearer ${store.state.user.token}` };
  }

  return axios.create(config);
};
