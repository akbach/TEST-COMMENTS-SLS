import { OAuth2Client } from 'google-auth-library';

import AuthClient from '../auth.interface';
const providerName = 'google';
const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
);

const verify = async (token: string) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const payload = ticket.getPayload();
  return {
    email: payload.email,
    name: payload.name,
    picture: payload.picture,
  };
};

const support = (provider) => {
  return provider === providerName;
};
const GoogleAuthClient: AuthClient = {
  support,
  verify,
};

export default GoogleAuthClient;
