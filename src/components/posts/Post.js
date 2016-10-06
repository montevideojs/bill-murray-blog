import React, { Component, PropTypes  } from 'react';
import { Link } from 'react-router';
import { GridTile } from 'material-ui/GridList';
import CheckBox from 'material-ui/Checkbox';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Star from 'material-ui/svg-icons/toggle/star';

class Post extends Component {

  static propTypes = {
    post: PropTypes.object
  }

  render() {
   const { post } = this.props;
   return (
    <Link to={"/detail/" + post._id}>
      <GridTile
        className="post"
        key={post._id}
        title={post.title}
        actionIcon={<CheckBox iconStyle={{fill: "white"}}
                      checkedIcon={<Star />}
                      uncheckedIcon={<StarBorder />} />
        }>
        <img src="http://www.fillmurray.com/300/420" />
      </GridTile>
    </Link>
   );
  }
}

export default Post;
