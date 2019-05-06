import NewsPage from './pages/NewsPage';
import NewsItemPage from './pages/NewsItemPage';
import NewsEditPage from './pages/NewsEditPage';

const routes = [
  {
    path: '/news',
    component: NewsPage,
  },
  {
    path: '/news/:newsId',
    component: NewsItemPage,
  },
  {
    path: '/news/:newsId/edit',
    component: NewsEditPage,
  },
];

export default routes;
