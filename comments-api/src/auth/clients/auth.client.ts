import AuthClient, { AuthPayloadPromise } from '../auth.interface';

import GoogleAuthClient from './google.auth.client';
import FacebookAuthClient from "./facebook.auth.client";

const clients: AuthClient[] = [GoogleAuthClient, FacebookAuthClient];

const authenticateUser = async (token, provider): AuthPayloadPromise => {
  const validClient = clients.find((client) => client.support(provider));
  if (validClient) {
    return validClient.verify(token);
  }
};

export default authenticateUser;
