import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import NavBar from './components/NavBar';
import routes from './router';


const styles = {
  mainContent: {
    paddingTop: 48 + 64,
    paddingBottom: 48,
  }
}

function App(props) {
  const { classes } = props;

  return (
    <Router>
      <div className="App">
        <NavBar />

        <main className={classes.mainContent}>
          {routes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              exact
              render={props => (
                <route.component {...props} routes={route.routes} />
              )}
            />
          ))}

          
        </main>
      </div>
    </Router>
  );
}

export default withStyles(styles)(App);
