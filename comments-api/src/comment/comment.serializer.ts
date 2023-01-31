export const commentSerializer = {
  article: {
    include: ['postId', 'id', 'body', 'user.name', 'user.picture', 'createdAt'],
  },
};
