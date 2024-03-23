import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { getBaseURL } from '@/utils/getBaseURL.util';

const API = ({ headers = {}, params = {} } = {}): AxiosInstance => {
  const user = JSON.parse(localStorage.getItem('user') as string) ?? {};
  const BASE_URL = getBaseURL('APP_SETTINGS_TRANSACTION_API');

  const instance = axios.create({
    baseURL: `${BASE_URL}/v2`,
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${user.token}`,
      ...headers,
    },
    params,
  });

  return instance;
};

const SettingTransactionServices = {
  getData: (): Promise<AxiosResponse> => {
    return API().get('/');
  },

  putData: (data: object): Promise<AxiosResponse> => {
    return API().put('/', data);
  },
};

export default SettingTransactionServices;
