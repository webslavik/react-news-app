export const addNews = news => ({
  type: 'ADD_NEWS',
  news,
});

export const editNews = newsId => ({
  type: 'EDIT_NEWS',
  newsId,
});

export const deleteNews = newsId => ({
  type: 'DELETE_NEWS',
  newsId,
});
