import { userLogin } from './auth';
const app_id = import.meta.env.VITE_FACEBOOK_APP_ID;

export const login = () => {
  FB.logout();
  FB.login(
    () => {
      FB.getLoginStatus((response) => {
        if (response.status === 'connected') {
          const token = response.authResponse.accessToken;
          userLogin(token, 'facebook');
        }
      });
    },
    {
      scope: 'email,public_profile',
    },
  );
};

export const initAuth = () => {
  FB.init({
    appId: app_id,
    cookie: true,
    xfbml: true,
    version: 'v15.0',
  });
  FB.AppEvents.logPageView();
};
