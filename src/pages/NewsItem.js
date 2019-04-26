import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';

const styles = {
  card: {
    minWidth: 620,
  }
}

class NewsItem extends React.Component {
  render() {
    const newsId = this.props.match.params.newsId;
    const { classes } = this.props;

    return (
      <Grid container justify='center'>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography>
                Title
              </Typography>
              <Typography>
                Author / date
              </Typography>
              <Typography>
                news all text.
              </Typography>
            </CardContent>
          </Card>

          <div>
            <Button variant='contained' color="primary">Edit</Button>
            <Button variant='contained' color='secondary'>Delete</Button>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(NewsItem);
