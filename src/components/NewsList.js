import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import NewsItem from './NewsItem';

function NewsList({ news }) {
  return (
    <Grid container alignContent='center' direction='column'>
      <Grid item xs={4}>
        {news.map(news => 
          <NewsItem key={news._id} newsData={news} />
        )}
      </Grid>
    </Grid>
  )
};

NewsList.propTypes = {
  news: PropTypes.array.isRequired,
};

export default NewsList;
