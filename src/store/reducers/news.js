import {
  RECEIVE_NEWS
} from '../actions';

const initState = {
  items: [],
};

const news = (state = initState, action) => {
  switch(action.type) {
    case RECEIVE_NEWS:
      return Object.assign({}, state, {
        items: action.news
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
    case 'DELETE_NEWS':
      return state.filter(news => news.id !== +action.newsId);
    default:
      return state;
  }
};

export default news;
