const initState = [
  {
    id: 1,
    title: 'News #1',
    text: 'Super news for all...',
    createdAt: +new Date(),
    author: 'Jack Jackson'
  },
  {
    id: 2,
    title: 'News for deleting #2',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,',
    createdAt: +new Date(),
    author: 'Bob Tall'
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
