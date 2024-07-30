import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ObjectPostBody } from '@/dto/restful.dto';

const API = ({ headers = {}, params = {} } = {}): AxiosInstance => {
  const BASE_URL = 'https://api.restful-api.dev';

  const instance = axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
      'Content-type': 'application/json',
      ...headers,
    },
    params,
  });

  return instance;
};

const RestfulServices = {
  getData: (): Promise<AxiosResponse<string>> => {
    return API().get('/objects');
  },

  postData: (body: ObjectPostBody): Promise<AxiosResponse> => {
    return API().post('/objects', body);
  },
};

export default RestfulServices;
