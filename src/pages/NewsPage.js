import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchNews } from '../store/actions';
import NewsList from '../components/NewsList';

class News extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchNews());
  }

  render() {
    const { news } = this.props;

    return (
      <NewsList news={news} />
    );
  }
}

News.propTypes = {
  news: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  news: state.news.items
});

export default connect(
  mapStateToProps
)(News);
