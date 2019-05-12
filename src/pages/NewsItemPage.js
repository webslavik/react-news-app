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

import { getNews, deleteNews } from '../store/actions';
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

  onDelete() {
    const newsId = this.props.match.params.newsId;
    this.props.onDeleteNews(newsId);
    this.setState({ toHome: true });
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
              <Typography variant='h5'>
                {this.state.newsData && this.state.newsData.title}
              </Typography>
              <Typography>
                {this.state.newsData && this.state.newsData.content}
              </Typography>
            </CardContent>
          </Card>

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
