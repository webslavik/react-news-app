export const addNews = news => ({
  type: 'ADD_NEWS',
  news,
});

export const getNews = newsId => ({
  type: 'GET_NEWS',
  newsId,
});

export const editNews = newsId => ({
  type: 'EDIT_NEWS',
  newsId,
});

export const deleteNews = newsId => ({
  type: 'DELETE_NEWS',
  newsId,
});
