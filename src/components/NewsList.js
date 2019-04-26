import React from 'react';
import Grid from '@material-ui/core/Grid';

import NewsItem from './NewsItem';


function NewsList() {
  return (
    <Grid container alignContent='center' direction='column'>
      <Grid item xs={4}>
        <NewsItem />
      </Grid>
    </Grid>
  )
}

export default NewsList;
