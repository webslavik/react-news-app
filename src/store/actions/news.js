import { api } from '../../api';

export const RECEIVE_NEWS = 'RECEIVE_NEWS';
export const RECEIVE_NEWS_ITEM = 'RECEIVE_NEWS_ITEM';
export const UPDATE_NEWS = 'UPDATE_NEWS';
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


const receiveNewsItem = (newsItem) => ({
  type: RECEIVE_NEWS_ITEM,
  newsItem,
})

export const fetchNewsItem = (newsId) => {
  return async (dispatch) => {
    try {
      const newsItem = await api.getNewsItem(newsId);
      dispatch(receiveNewsItem(newsItem));
    } catch (err) {
      console.log(`[ERROR] Can't fetch news item!`);
    }
  }
}


const updateNewsAction = (news) => ({
  type: UPDATE_NEWS,
  news
});

export const updateNews = (news) => {
  return async (dispatch) => {
    try {
      const data = await api.updateNews(news);

      if (data.error) {
        dispatch(updateNewsAction({ isUpdate: false }));
        return;
      }

      console.log('Data?', data);
      dispatch(updateNewsAction({ isUpdate: true }));
    } catch (err) {
      console.log(`[ERROR] Can't update news!`);
    }
  }
}


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
