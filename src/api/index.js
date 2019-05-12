import axios from 'axios';

const urlAPI = 'http://localhost:5000/api/v1';

export const getGoogleToken = async (token) => {
  try {
    const { data } = await axios.post(`${urlAPI}/auth/google`, { token: token });
    return data.token;
  } catch (err) {
    console.log(err)
  }
}

export const getNewsList = async () => {
  try {
    const { data } = await axios.get(`${urlAPI}/feeds`);
    return data.feeds;
  } catch (err) {
    console.log(err)
  }
}

export const getNewsData = async (id) => {
  try {
    const { data } = await axios.get(`${urlAPI}/feeds/${id}`);
    return data.feed;
  } catch (err) {
    console.log(err)
  }
}
