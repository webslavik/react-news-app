import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import NavBar from './components/NavBar';

import routes from './router';
import rootReducer from './store/reducers';

const store = createStore(rootReducer);

const styles = {
  mainContent: {
    paddingTop: 48 + 64,
    paddingBottom: 48,
  }
}

function App(props) {
  const { classes } = props;

  return (
    <Provider store={store}>
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
                  // pass the sub-routes down to keep nesting
                  <route.component {...props} routes={route.routes} />
                )}
              />
            ))}

            
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default withStyles(styles)(App);
