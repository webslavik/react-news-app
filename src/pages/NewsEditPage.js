import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardContent,
  Button,
  TextField
} from '@material-ui/core';
import store from '../store';
import { editNews } from '../store/actions';

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
  },
}

class NewsEdit extends React.Component {
  state = {
    newsId: null,
    newsTitle: '',
    newsText: '',
    toNews: false,
  }

  constructor(props) {
    super(props);

    this.onSave = this.onSave.bind(this);
    this.onCancel = this.onCancel.bind(this);

    const newsId = this.props.match.params.newsId;

    const news = store.getState().news;
    const foundedNews = news.filter(news => news.id === +newsId);
    
    this.state.newsId = newsId;
    this.state.newsTitle = foundedNews[0].title;
    this.state.newsText = foundedNews[0].text;
  }

  handleChangeTitle = event => {
    event.persist();
    this.setState({ newsTitle: event.target.value });
  }
  handleChangeText = event => {
    event.persist();
    this.setState({ newsText: event.target.value });
  }

  onSave() {
    const news = {
      id: +this.state.newsId,
      title: this.state.newsTitle,
      text: this.state.newsText,
    };
    
    this.props.onEditNews(news);
    this.setState({ toNews: true });
  }

  onCancel() {
    this.setState({ toNews: true });
  }

  render() {
    const { classes } = this.props;

    if (this.state.toNews === true) {
      return <Redirect to={{
        pathname: `/news/${this.state.newsId}`
      }} />
    }

    return (
      <Grid container justify='center'>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <CardContent>
              <form>
                <TextField
                  ref='newsTitle'
                  id="title-input"
                  className={classes.field}
                  placeholder='Title'
                  value={this.state.newsTitle}
                  onChange={this.handleChangeTitle}
                />
                <TextField
                  ref='newsText'
                  className={classes.field}
                  placeholder='Text'
                  rows='8'
                  multiline={true}
                  value={this.state.newsText}
                  onChange={this.handleChangeText}
                />
              </form>
            </CardContent>
          </Card>

          <div>
            <Button 
              className={classes.btnSave}
              variant='contained' 
              color="primary"
              onClick={this.onSave}>
              Save
            </Button>
            <Button 
              variant='contained' 
              color='secondary'
              onClick={this.onCancel}>
              Cancel
            </Button>
          </div>
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onEditNews: news => dispatch(editNews(news)),
});



export default compose(
  connect(null, mapDispatchToProps),
  withStyles(styles),
)(NewsEdit);
