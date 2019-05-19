import { api } from '../../api';

export const RECEIVE_NEWS = 'RECEIVE_NEWS';
export const DELETE_NEWS = 'DELETE_NEWS';

const receiveNews = (news) => ({
  type: RECEIVE_NEWS,
  news,
});

export const fetchNews = () => {
  return async (dispatch) => {
    try {
      const news = await api.getNewsList();
      dispatch(receiveNews(news));
    } catch (err) {
      console.log(`[ERROR] Can't fetch news!`);
    }
  }
};


const deleteNewsAction = (newsId) => ({
  type: DELETE_NEWS,
  newsId
});

export const deleteNews = ({ newsId, token }) => {
  return async (dispatch) => {
    try {
      await api.deleteNews({ newsId, token });
      dispatch(deleteNewsAction(newsId));
    } catch (err) {
      console.log(`[ERROR] Can't delete news!`);
    }
  }
};
