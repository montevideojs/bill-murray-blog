import React, { Component, PropTypes } from 'react';
import { post } from '../../api/posts';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';

class PostDetail extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }

  componentWillMount() {
    // Here's were we should make an API call
    // With `this.props.params.id
    this.setState({post: post});
  }

  render() {
    const { post } = this.state;
    return (
      <Card className="text-center" style={{width: "50%", margin: "auto", marginTop: 30}}>
       <CardTitle title={post.title} />
       <CardText>
        {post.body}
       </CardText>
      </Card>
    );
  }
}


export default PostDetail;
