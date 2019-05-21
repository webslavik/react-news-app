import {
  RECEIVE_NEWS,
  RECEIVE_NEWS_ITEM,
  UPDATE_NEWS,
  DELETE_NEWS,
} from '../actions';

const initState = {
  items: [],
  newsItem: {},
  isUpdate: false,
};

const news = (state = initState, action) => {
  switch(action.type) {
    case RECEIVE_NEWS:
      return Object.assign({}, state, {
        items: action.news
      });
    case RECEIVE_NEWS_ITEM:
      return Object.assign({}, state, {
        newsItem: action.newsItem
      });
    case UPDATE_NEWS:
      return Object.assign({}, state, {
        isUpdate: action.news.isUpdate,
      });
    case DELETE_NEWS:
      const filteredNews = state.items.filter(item => item._id !== action.newsId);
      return Object.assign({}, state, {
        items: filteredNews
      });
    default:
      return state;
  }
};

export default news;
