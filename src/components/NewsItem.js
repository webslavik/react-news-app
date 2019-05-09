import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles'
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@material-ui/core';
import Moment from 'react-moment';
import { cutText } from '../helpers';

import CardMenu from './CardMenu';

const styles = {
  card: {
    minWidth: 480,
    marginBottom: 16,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function NewsItem({ classes, newsData }) {
  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          <CardMenu newsId={newsData.id} />
        }
        title={
          <Typography variant='subtitle2'>
            {newsData.author}
          </Typography>
        }
        subheader={
          <Moment format='YYYY/MM/DD'>
            {newsData.createdAt}
          </Moment>
        }
      />
      <CardContent>
        <Typography variant='h5'>
          {newsData.title}
        </Typography>
        <Typography>
          {cutText(newsData.text)}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={{
          pathname: `/news/${newsData.id}`,
        }}>
          <Button>Read more</Button>
        </Link>
      </CardActions>
    </Card>
  )
}

NewsItem.propTypes = {
  classes: PropTypes.object.isRequired,

}

export default withStyles(styles)(NewsItem);
