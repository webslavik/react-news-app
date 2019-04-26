import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

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
  }
};

function NavBar(props) {
  const { classes } = props;

  return (
    <AppBar>
      <Toolbar >
        <Link to='/news' className={classes.linkColor}>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <HomeIcon />
          </IconButton>
        </Link>
        <div className={classes.grow}></div>
        {/* <Typography variant="h6" color="inherit" className={classes.grow}>
          News
        </Typography> */}
        <Button color="inherit">Sign in</Button>
      </Toolbar>
    </AppBar>
  )
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
