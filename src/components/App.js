// This component handles the App template used on every page.
import React, { PropTypes } from 'react';
import Header from './common/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className="main-content">
          {this.props.children}
        </main>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
