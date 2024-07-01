import { type AxiosResponse } from 'axios';
import axios from './axisoWrapper';

export const TaskRepository = {
  get(): Promise<AxiosResponse> {
    return axios.get('api/v1/tasks');
  },
};
