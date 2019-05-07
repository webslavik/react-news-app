export const addNews = news => ({
  type: 'ADD_NEWS',
  news,
});

export const deleteNews = newsId => ({
  type: 'DELETE_NEWS',
  newsId,
});
