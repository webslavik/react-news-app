import React from 'react';
import { getNewsList } from '../api';

import NewsList from '../components/NewsList';

class News extends React.Component {
  state = {
    news: [],
  }

  async fetchNewsList() {
    const news = await getNewsList();
    this.setState({ news });
  }

  componentDidMount() {
    this.fetchNewsList();
  }

  render() {
    return (
      <NewsList allNews={this.state.news} />
    );
  }
}



export default News;
