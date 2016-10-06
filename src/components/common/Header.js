import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import FillMurray from './FillMurray';


const style = {
    height: 200,
    width: 200,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};


class AppBarMenu extends Component {
  render() {
    return (
      <Paper zDepth={2}>
        <header className="site-header">
          <Paper style={style} zDepth={4} circle={true}>
            <FillMurray className="avatar" width="200" height="200" />
          </Paper>
          <h1 className="title">
            Bill Murray cool blog
          </h1>
        </header>
      </Paper>
    );
  }
}

export default AppBarMenu;
