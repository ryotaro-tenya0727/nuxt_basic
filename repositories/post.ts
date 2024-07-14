import { type AxiosResponse } from 'axios';
import axios from './axisoWrapper';
import { getAuthDataFromStorage } from './user';

export type Post = {
  title: string;
  body: string;
  userName: string;
  createdAt: string;
};

export type PostForRequest = Pick<Post, 'title' | 'body'>;

export const PostRepository = {
  get: async () => {
    return await axios
      .get('/posts')
      .then((res: AxiosResponse<Post[]>) => {
        console.log(res);
        return res.data;
      })
      .catch((err) => {
        return err.response;
      });
  },
  create: async (formData: PostForRequest) => {
    return await axios
      .post('/posts', formData, {
        headers: getAuthDataFromStorage(),
      })
      .then((res: AxiosResponse<Post>) => {
        console.log(res);
        alert('投稿しました');
        return res.data;
      });
  },
};
