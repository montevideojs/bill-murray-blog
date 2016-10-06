import 'babel-polyfill';
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import '../stylesheets/main.scss'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// These is necesary since facebook decided to not
// Defining Custom Events like Tap
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <Router history={browserHistory} routes={routes} />
  </MuiThemeProvider>
);


render(
  <App />,
  document.getElementById('app')
);
