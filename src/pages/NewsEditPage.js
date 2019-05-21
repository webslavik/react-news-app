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
import { fetchNewsItem, updateNews } from '../store/actions';;

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
    title: '',
    content: '',
    toNews: false,
  }

  constructor(props) {
    super(props);

    this.onSave = this.onSave.bind(this);
    this.onCancel = this.onCancel.bind(this);

    this.state.newsId = this.props.match.params.newsId;
  }

  handleChangeTitle = (event) => {
    event.persist();
    this.setState({ title: event.target.value });
  }
  handleChangeContent = (event) => {
    event.persist();
    this.setState({ content: event.target.value });
  }

  async onSave() {
    const { dispatch, token } = this.props;

    const news = {
      token,
      newsId: this.state.newsId,
      title: this.state.title,
      content: this.state.content,
    };

    dispatch(updateNews(news));
  }

  onCancel() {
    this.setState({ toNews: true });
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const newsId = this.state.newsId;
    dispatch(fetchNewsItem(newsId));
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.newsData.title,
      content: nextProps.newsData.content,
    });
  }

  render() {
    const { classes, isUpdate } = this.props;

    if (this.state.toNews === true || isUpdate === true) {
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
                  value={this.state.title}
                  onChange={this.handleChangeTitle}
                />
                <TextField
                  ref='newsText'
                  className={classes.field}
                  placeholder='Text'
                  rows='8'
                  multiline={true}
                  value={this.state.content}
                  onChange={this.handleChangeContent}
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


const mapStateToProps = state => ({
  token: state.auth.token,
  newsData: state.news.newsItem,
  isUpdate: state.news.isUpdate,
});

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(NewsEdit);
