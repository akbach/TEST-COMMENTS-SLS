import { deleteCookie, userLogin } from './auth';

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

export const login = () => {
  deleteCookie('g_state');
  google.accounts.id.prompt();
};

export const initAuth = () => {
  google.accounts.id.initialize({
    client_id: clientId,
    callback: (user) => {
      const token = user.credential;
      userLogin(token, 'google');
    },
  });
};
