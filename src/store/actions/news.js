import { getNewsList } from '../../api';

export const RECEIVE_NEWS = 'RECEIVE_NEWS';

const receiveNews = (news) => ({
  type: RECEIVE_NEWS,
  news,
});

export const fetchNews = () => {
  return async (dispatch) => {
    try {
      const news = await getNewsList();
      dispatch(receiveNews(news));
    } catch (err) {
      console.log('[ERROR] Can not fetch news!');
    }
  }
};
