import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import NewsList from './components/NewsList';

const styles = {
  mainContent: {
    paddingTop: 48 + 64,
    paddingBottom: 48,
  }
}

function App(props) {
  const { classes } = props;

  return (
    <div className="App">
      <NavBar />

      {/* Main content */}
      <div className={classes.mainContent}>
        <NewsList />
      </div>
    </div>
  );
}

export default withStyles(styles)(App);
