const initState = [
  {
    id: +new Date(),
    title: 'News #1',
    text: 'Super news for all...',
    createdAt: +new Date(),
    author: 'Jack Jackson'
  },
];

const news = (state = initState, action) => {
  switch(action.type) {
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
    case 'DELETE_NEWS':
      return state.filter(news => news.id !== action.newsId);
    default:
      return state;
  }
};

export default news;
