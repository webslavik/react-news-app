import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Moment from 'react-moment';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';

import CardMenu from '../components/CardMenu';
import { getNewsData } from '../api';

const styles = {
  card: {
    marginBottom: 24,
  },
  btnEdit: {
    marginRight: 16,
  }
}

class NewsItem extends React.Component {
  state = {
    newsData: null,
    toHome: false,
    newsId: null,
  }

  constructor(props) {
    super(props);
    this.state.newsId = this.props.match.params.newsId;
  }

  async onDelete() {
    const { token } = this.props;

    const data = {
      token,
      id: this.state.newsId,
    }

    console.log('Delete:', data);
  }

  async fetchNewsData() {
    const newsData = await getNewsData(this.state.newsId);
    this.setState({ newsData });
  }
 
  componentDidMount() {
    this.fetchNewsData();
  }

  render() {
    const { classes, token } = this.props;

    if (this.state.toHome === true) {
      return <Redirect to='/news' />
    }

    return (
      <Grid container justify='center'>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <CardHeader 
              action={
                <div>
                  {token && 
                    <CardMenu newsId={this.state.newsId} />
                  }
                </div>
              }
              title={
                <Typography variant='subtitle2'>
                  {this.state.newsData && this.state.newsData.creator.displayName}
                </Typography>
              }
              subheader={
                <Moment format='YYYY/MM/DD'>
                  {this.state.newsData && this.state.newsData.createDate}
                </Moment>
              }
            />
            <CardContent>
              <Typography variant='h5'>
                {this.state.newsData && this.state.newsData.title}
              </Typography>
              <Typography>
                {this.state.newsData && this.state.newsData.content}
              </Typography>
            </CardContent>
          </Card>
          
          {token && 
            <div>
              <Link to={{
                pathname: `/news/${this.state.newsId}/edit`
              }}>
                <Button 
                  variant='contained' 
                  color="primary" 
                  className={classes.btnEdit}>
                  Edit
                </Button>
              </Link>
              <Button 
                variant='contained' 
                color='secondary' 
                onClick={this.onDelete.bind(this)}>
                Delete
              </Button>
            </div>
          }
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.token,
});

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(NewsItem);
