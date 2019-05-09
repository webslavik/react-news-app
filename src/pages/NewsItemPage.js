import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { getNews, deleteNews } from '../store/actions';
import CardMenu from '../components/CardMenu';
import store from '../store';

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
  }

  constructor(props) {
    super(props);

    const newsId = this.props.match.params.newsId;

    const news = store.getState().news;
    const foundedNews = news.filter(news => news.id === +newsId);
    
    this.state.newsData = foundedNews[0];
  }

  onDelete() {
    const newsId = this.props.match.params.newsId;
    this.props.onDeleteNews(newsId);
    this.setState({ toHome: true });
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
                <CardMenu newsId={this.props.match.params.newsId} />
              }
              title={
                <Typography variant='subtitle2'>
                  {this.state.newsData.author}
                </Typography>
              }
              subheader={
                <div>
                  {this.state.newsData.createdAt}
                </div>
              }
            />
            <CardContent>
              <Typography variant='h5'>
                {this.state.newsData.title}
              </Typography>
              <Typography>
              {this.state.newsData.text}
              </Typography>
            </CardContent>
          </Card>

          <div>
            <Link to={{
              pathname: `/news/${this.state.newsData.id}/edit`
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
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onGetNewsData: id => dispatch(getNews(id)),
  onDeleteNews: id => dispatch(deleteNews(id)),
});


export default compose(
  connect(null, mapDispatchToProps),
  withStyles(styles),
)(NewsItem);
