import { 
  RECEIVE_NEWS,

  fetchNews,
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
  fetchNews,

  // old,
  setUser,
  clearUserData,
  addNews,
}
