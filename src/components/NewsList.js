import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';


import NewsItem from './NewsItem';


function NewsList({ allNews }) {
  return (
    <Grid container alignContent='center' direction='column'>
      <Grid item xs={4}>
        {allNews.map(news => 
          <NewsItem key={news._id} newsData={news} />
        )}
      </Grid>
    </Grid>
  )
};

NewsList.propTypes = {
  allNews: PropTypes.array.isRequired,
};

export default NewsList;
