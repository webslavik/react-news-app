import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardContent,
  Button,
  TextField
} from '@material-ui/core';

const styles = {
  card: {
    marginBottom: 24,
  },
  field: {
    display: 'flex',
    marginBottom: 16,
  },
  btnSave: {
    marginRight: 16
  }
}

class NewsEdit extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container justify='center'>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <CardContent>
              <form>
                <TextField
                  className={classes.field}
                  placeholder='Title'
                  value={'News title'}
                />
                <TextField
                  className={classes.field}
                  placeholder='Text'
                  value={'News text'}
                  rows='5'
                  rowsMax='6'
                />
              </form>
            </CardContent>
          </Card>

          <div>
            <Button 
              className={classes.btnSave}
              variant='contained' 
              color="primary">
              Save
            </Button>
            <Button variant='contained' color='secondary'>Cancel</Button>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(NewsEdit);
