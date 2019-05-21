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
import { fetchNewsItem, deleteNews } from '../store/actions';;

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
    toNews: false,
    newsId: null,
  }

  constructor(props) {
    super(props);
    this.state.newsId = this.props.match.params.newsId;
  }

  async onDelete() {
    const { dispatch, token } = this.props;
    const newsId = this.state.newsId;

    dispatch(deleteNews({ newsId, token }));
    this.setState({ toNews: true });
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const newsId = this.state.newsId;
    dispatch(fetchNewsItem(newsId));
  }

  render() {
    const { classes, token, newsData } = this.props;
    console.log(newsData);

    if (this.state.toNews === true) {
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
                  {newsData.creator && newsData.creator.displayName}
                </Typography>
              }
              subheader={
                <Moment format='YYYY/MM/DD'>
                  {newsData && newsData.createDate}
                </Moment>
              }
            />
            <CardContent>
              <Typography variant='h5'>
                {newsData && newsData.title}
              </Typography>
              <Typography>
                {newsData && newsData.content}
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
  newsData: state.news.newsItem,
});

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(NewsItem);
