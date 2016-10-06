import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import { GridList } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import SubHeader from 'material-ui/Subheader';
import Post from './Post';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 25
  },
  gridList: {
    width: 900,
    height: 500,
    marginBottom: 24
  }
};


const Posts = ({posts}) => {
  return (
    <div style={styles.root}>
      <GridList
          cellHeight={400}
          cols={3}
          padding={20}
          style={styles.gridList}>
      <SubHeader>Bill Murray Cool Posts</SubHeader>
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </GridList>
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Posts;
