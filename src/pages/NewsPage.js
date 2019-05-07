import React from 'react';
import { connect } from 'react-redux';

import NewsList from '../components/NewsList';

class News extends React.Component {
  render() {
    return (
      <NewsList allNews={this.props.news} />
    );
  }
}

const mapStateToProps = state => ({
  news: state.news,
});

export default connect(
  mapStateToProps,
)(News);
