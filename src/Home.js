import React, { Component } from 'react';
import AllBlogPosts from './AllBlogPosts';

class Home extends Component {
  render() {
    return (
      <div className="col-12 col-sm-8 col-md-9 text-center">
        <h1>Hello there! ;]</h1>
        <AllBlogPosts/>
      </div>
    );
  }
}

export default Home;