import React from 'react';
import { Link } from 'react-router-dom';
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

const clientId = '30451489230-rj4nv9du38qfu043v9use2m8ct3b38su.apps.googleusercontent.com';

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
    isLogin: false,
    userName: null,
    userAvatar: null,
  }

  onLogin = response => {
    const { profileObj } = response;

    this.setState({ 
      isLogin: true,
      userName: profileObj.name,
      userAvatar: profileObj.imageUrl
    });

    console.log('response:', response);
  }
  
  onLogout = () => {
    this.setState({ 
      isLogin: false,
      userName: null,
      userAvatar: null,
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

          {!this.state.isLogin &&   
            <GoogleLogin
              clientId={clientId}
              onSuccess={this.onLogin}
              onFailure={this.onError}>
              Log in 
            </GoogleLogin>
          }

          {this.state.isLogin &&
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

export default withStyles(styles)(NavBar);
