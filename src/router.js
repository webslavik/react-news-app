import News from './pages/News';
import NewsItem from './pages/NewsItem';
import NewsEdit from './pages/NewsEdit';

const routes = [
  {
    path: '/news',
    component: News,
  },
  {
    path: '/news/:newsId',
    component: NewsItem
  },
  {
    path: '/news/:newsId/edit',
    component: NewsEdit
  },
];

export default routes;
