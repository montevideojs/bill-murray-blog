import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import PageNotFound from './components/common/PageNotFound';
import PostDetail from './components/posts/PostDetail';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="detail/:id" component={PostDetail} />
    <Route path="*" component={PageNotFound}/>
  </Route>
);
