import React, { Component, PropTypes } from 'react';

class FillMurray extends Component {
  static defaultProps = {
    width: '200',
    height: '200'
  }

  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string
  }

  render() {
    const { height, width, className } = this.props;
    const imageUrl = `http://www.fillmurray.com/${width}/${height}`;
    return <img className={className} src={imageUrl} width={width} height={height}/>;
  }
}

export default FillMurray;
