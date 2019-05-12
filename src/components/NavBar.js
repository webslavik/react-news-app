import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import {
  AppBar,
  Avatar,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { getGoogleToken } from '../api';
import config from '../config';
import store from '../store';
import { setUser, clearUserData } from '../store/actions';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  linkColor: {
    color: '#ffffff',
  },
  userElements: {
    display: 'flex',
    alignItems: 'center',
  },
  userName: {
    marginRight: 12,
  },
  userAvatar: {
    marginRight: 16
  }
};


class NavBar extends React.Component {
  state = {
    userName: null,
    userAvatar: null,
    token: null,
  }

  onLogin = async response => {
    console.log('response:', response);

    try {
      const { profileObj, tokenId } = response;
      const token = await getGoogleToken(tokenId);

      this.props.setUserData({
        userName: profileObj.name,
        userAvatar: profileObj.imageUrl,
        token,
      });

      const { user } = store.getState();

      this.setState({
        userName: user.userName,
        userAvatar: user.userAvatar,
        token: user.token,
      });
    } catch (err) {
      console.log(err)
    }
  }
  
  onLogout = () => {
    this.props.clearUserData();

    this.setState({ 
      userName: null,
      userAvatar: null,
      token: null,
    });
  }

  onError = response => {
    console.error('error:', response);
  }

  render() {
    const { classes } = this.props;

    return (
      <AppBar>
        <Toolbar >
          <Link to='/news' className={classes.linkColor}>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <HomeIcon />
            </IconButton>
          </Link>
          <div className={classes.grow}></div>

          {!this.state.token &&   
            <GoogleLogin
              clientId={config.clientId}
              onSuccess={this.onLogin}
              onFailure={this.onError}>
              Log in 
            </GoogleLogin>
          }

          {this.state.token &&
            <div className={classes.userElements}>
              <Typography 
                variant="subtitle2" 
                color="inherit" 
                className={classes.userName}>
                  {this.state.userName}
              </Typography>
              <Avatar 
                alt="avatar" 
                src={this.state.userAvatar}
                className={classes.userAvatar} />
              <GoogleLogout 
                buttonText="Log out"
                onLogoutSuccess={this.onLogout} />
            </div>
          }
        </Toolbar>
      </AppBar>
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapDispatchToProps = dispatch => ({
  setUserData: user => dispatch(setUser(user)),
  clearUserData: () => dispatch(clearUserData()),
});

export default compose(
  connect(null, mapDispatchToProps),
  withStyles(styles),
)(NavBar);
