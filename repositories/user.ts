import { type AxiosResponse, AxiosError } from 'axios';
import axios from './axisoWrapper';

export type User = {
  allow_password_change: boolean;
  email: string;
  id: string;
  image: string | null;
  nickname: string;
  provider: string;
  uid: string;
};

type AuthHeaders = {
  'access-token': string | null;
  uid: string | null;
  client: string | null;
  expiry: string | null;
  'Content-Type': string;
};

export const getAuthDataFromStorage = (): AuthHeaders => {
  return {
    'access-token': localStorage.getItem('access-token'),
    client: localStorage.getItem('client'),
    expiry: localStorage.getItem('expiry'),
    uid: localStorage.getItem('uid'),
    'Content-Type': 'application/json',
  };
};

const setAuthDataFromResponse = (authData: AuthHeaders): void => {
  if (
    authData['access-token'] &&
    authData['client'] &&
    authData['uid'] &&
    authData['expiry']
  ) {
    localStorage.setItem('access-token', authData['access-token']);
    localStorage.setItem('client', authData['client']);
    localStorage.setItem('uid', authData['uid']);
    localStorage.setItem('expiry', authData['expiry']);
  }
};

const removeAuthDataFromStorage = (): void => {
  localStorage.removeItem('access-token');
  localStorage.removeItem('client');
  localStorage.removeItem('uid');
  localStorage.removeItem('expiry');
};

export const UserRepository = {
  login: async (email: string, password: string) => {
    return await axios
      .post<User>('/auth/sign_in', { email, password })
      .then((res: AxiosResponse<User>) => {
        const authHeaders: AuthHeaders = {
          'access-token': res.headers['access-token'],
          uid: res.headers['uid'],
          client: res.headers['client'],
          expiry: res.headers['expiry'],
          'Content-Type': 'application/json',
        };
        setAuthDataFromResponse(authHeaders);
        return res;
      })
      .catch((err: AxiosError) => {
        console.log(err);
        return err.response;
      });
  },
  logout: async () => {
    return await axios
      .delete('/auth/sign_out', { headers: getAuthDataFromStorage() })
      .then((res: AxiosResponse) => {
        removeAuthDataFromStorage();
        return res;
      })
      .catch((err: AxiosError) => {
        return err.response;
      });
  },
};
