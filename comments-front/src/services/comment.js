import store from '../store/store';
import { getApiClient } from './api.client';

export const getLastComments = async () => {
  const { data } = await getApiClient().get('/comment');
  store.commit('SET_LAST_COMMENTS', data);
};

export const getCommentsByPostId = async (postId) => {
  const { data } = await getApiClient().get(`/comment/post/${postId}`);
  store.commit('SET_LAST_COMMENTS', data);
};
export const saveComment = async (body, postId, parentId) => {
  const { data: comment } = await getApiClient().post('/comment', {
    postId,
    body,
    parentId,
  });

  return comment;
};
