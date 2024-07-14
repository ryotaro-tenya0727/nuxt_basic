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
  create: async (formData: PostForRequest) => {
    console.log(getAuthDataFromStorage());
    return await axios
      .post('/posts', formData, {
        headers: getAuthDataFromStorage(),
      })
      .then((res: AxiosResponse<Post>) => {
        console.log(res);
        alert('投稿しました');
        return res;
      });
  },
};
