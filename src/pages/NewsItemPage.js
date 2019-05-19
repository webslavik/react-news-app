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
    const data = {
      token: this.state.token,
      id: this.state.newsId,
    }
    console.log(data)
    return;
    try {
      const data = {
        token: this.state.token,
        id: this.state.newsId,
      }
      // await deleteNews(data);
      this.setState({ toHome: true });
    } catch (err) {
      console.log(err)
    }
  }

  async fetchNewsData() {
    const newsData = await getNewsData(this.state.newsId);
    this.setState({ newsData });
  }
 
  componentDidMount() {
    this.fetchNewsData();
  }

  render() {
    const { classes } = this.props;

    if (this.state.toHome === true) {
      return <Redirect to='/news' />
    }

    return (
      <Grid container justify='center'>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <CardHeader 
              action={
                <CardMenu newsId={this.state.newsId} />
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
            <div>
              Token: {this.props.token}
            </div>

              <Typography variant='h5'>
                {this.state.newsData && this.state.newsData.title}
              </Typography>
              <Typography>
                {this.state.newsData && this.state.newsData.content}
              </Typography>
            </CardContent>
          </Card>
          
          {this.props.token && 
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
  token: state.user.token,
});

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(NewsItem);
