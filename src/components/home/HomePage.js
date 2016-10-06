import React, { Component } from 'react';
import Posts from '../posts/Posts.js';
import { posts } from '../../api/posts';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    this.setState({posts: posts});
  }

  render() {
    return (
      <div className="blog-content">
        <Posts posts={posts} />
      </div>
    );
  }
}

export default HomePage;
