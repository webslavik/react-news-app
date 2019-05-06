import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';

import CardMenu from '../components/CardMenu';

const styles = {
  card: {
    marginBottom: 24,
  },
  btnEdit: {
    marginRight: 16,
  }
}

class NewsItem extends React.Component {
  render() {
    const newsId = this.props.match.params.newsId;
    const { classes } = this.props;

    return (
      <Grid container justify='center'>
        <Grid item xs={6}>
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
                Title
              </Typography>
              <Typography>
                All news text
              </Typography>
            </CardContent>
          </Card>

          <div>
            <Link to='/news/id123456/edit'>
              <Button 
                variant='contained' 
                color="primary" 
                className={classes.btnEdit}>
                Edit
              </Button>
            </Link>
            <Button variant='contained' color='secondary'>Delete</Button>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(NewsItem);
