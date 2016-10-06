import React, { Component } from 'react';
import FillMurray from './FillMurray';

class PageNotFound extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title text-center">Oops... Not Bill Murray's fault</h1>
        <p className="text-center" style={{fontSize: 40}}> ¯\_(ツ)_/¯</p>
        <div className="col-md-offset-3 col-md-12">
          <FillMurray  width="600" height="600" style={{borderRadius: 30}}/>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
