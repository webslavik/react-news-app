import {
  RECEIVE_NEWS,
  RECEIVE_NEWS_ITEM,
  DELETE_NEWS,
} from '../actions';

const initState = {
  items: [],
  newsItem: {},
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
    case DELETE_NEWS:
      const filteredNews = state.items.filter(item => item._id !== action.newsId);
      return Object.assign({}, state, {
        items: filteredNews
      });

    // old
    case 'ADD_NEWS':
      return [
        ...state,
        {
          id: +new Date(),
          title: action.news.title,
          text: action.news.text,
          createdAt: new Date(),
          author: 'Jack Jackson'
        }
      ];
    case 'GET_NEWS':
      return state;
    case 'EDIT_NEWS':
      state.forEach(news => {
        if (news.id !== action.news.id) {
          return;
        }

        news.title = action.news.title;
        news.text = action.news.text;
      });

      return state;
    default:
      return state;
  }
};

export default news;
