export const setUser = user => ({
  type: 'SET_USER',
  user,
});
export const clearUserData = () => ({
  type: 'CLEAE_USER',
});

export const addNews = news => ({
  type: 'ADD_NEWS',
  news,
});

export const getNews = newsId => ({
  type: 'GET_NEWS',
  newsId,
});

export const deleteNews = newsId => ({
  type: 'DELETE_NEWS',
  newsId,
});
