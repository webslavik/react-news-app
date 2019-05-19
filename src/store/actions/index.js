import { 
  RECEIVE_NEWS,
  DELETE_NEWS,

  fetchNews,
  deleteNews,
} from './news';

const setUser = user => ({
  type: 'SET_USER',
  user,
});
const clearUserData = () => ({
  type: 'CLEAE_USER',
});

const addNews = news => ({
  type: 'ADD_NEWS',
  news,
});

export {
  RECEIVE_NEWS,
  DELETE_NEWS,

  fetchNews,
  deleteNews,

  // old,
  setUser,
  clearUserData,
  addNews,
}
