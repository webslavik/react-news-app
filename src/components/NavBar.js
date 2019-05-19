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
import config from '../config';
import { loginUser, logoutUser } from '../store/actions';

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
  onLogin = async response => {
    const { dispatch } = this.props;
    const { profileObj: user, tokenId: googleToken } = response;
    dispatch(loginUser({ user, googleToken }));
  }
  
  onLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  }

  onError = response => {
    console.log('[GOOGLE ERROR] Auth error:', response);
  }

  render() {
    const { classes, token, userName, userAvatar } = this.props;

    return (
      <AppBar>
        <Toolbar >
          <Link to='/news' className={classes.linkColor}>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <HomeIcon />
            </IconButton>
          </Link>
          <div className={classes.grow}></div>

          {!token &&   
            <GoogleLogin
              clientId={config.clientId}
              onSuccess={this.onLogin}
              onFailure={this.onError}>
              Log in 
            </GoogleLogin>
          }

          {token &&
            <div className={classes.userElements}>
              <Typography 
                variant="subtitle2" 
                color="inherit" 
                className={classes.userName}>
                  {userName}
              </Typography>
              <Avatar 
                alt="avatar" 
                src={userAvatar}
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

const mapStateToProps = state => ({
  token: state.auth.token,
  userName: state.auth.name,
  userAvatar: state.auth.avatar,
});

export default compose(
  connect(mapStateToProps),
  withStyles(styles),
)(NavBar);
