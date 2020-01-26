import React, { Component } from 'react';
import { Col } from 'reactstrap';
import AllBlogPosts from './AllBlogPosts';

class Home extends Component {
  render() {
    return (
      <Col xs="12" sm="8" md="9" className="text-center">
        <h1>Hello there! ;]</h1>
        <AllBlogPosts/>
      </Col>
    );
  }
}

export default Home;