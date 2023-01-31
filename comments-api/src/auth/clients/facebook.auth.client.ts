import axios from 'axios';

import AuthClient from '../auth.interface';
const providerName = 'facebook';

const verify = async (token: string) => {
  const { data } = await axios({
    url: 'https://graph.facebook.com/me',
    method: 'get',
    params: {
      fields: ['id', 'email', 'name', 'picture'].join(','),
      access_token: token,
    },
  });
  return {
    email: data.email,
    name: data.name,
    picture: data.picture.data.url,
  };
};

const support = (provider) => {
  return provider === providerName;
};
const FacebookAuthClient: AuthClient = {
  support,
  verify,
};

export default FacebookAuthClient;
