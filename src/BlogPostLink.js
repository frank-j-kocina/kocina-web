import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BlogPostLink extends Component {
  render() {
    return (
      <li>
        <Link to={this.props.href} title={this.props.title}>
          {this.props.number} - {this.props.title}
        </Link>
      </li>
    );
  }
}

export default BlogPostLink;