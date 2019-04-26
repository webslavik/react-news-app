import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@material-ui/core';

import CardMenu from './CardMenu';

const styles = {
  card: {
    minWidth: 480,
    marginBottom: 16
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function NewsItem(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          <CardMenu />
        }
        title={
          <Typography variant='subtitle2'>
            Don Cheadle
          </Typography>
        }
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant='h5'>
          Iron Man dead!
        </Typography>
        <Typography>
          card text (max 200 characters)
        </Typography>
      </CardContent>
      <CardActions>
        <Link to='/news/id123456'>
          <Button>Read more...</Button>
        </Link>
      </CardActions>
    </Card>
  )
}

NewsItem.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NewsItem);
