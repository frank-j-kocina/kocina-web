import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class BlogNavigation extends Component {
  render() {
    return (
      <div className="blog-navigation">
        {/* TODO - separate number from title, make more data driven */}
        <Link className="pull-left" to={this.props.previousLink} title={this.props.previousTitle}>
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span>{this.props.previousTitle}</span>
        </Link>
        <Link className="pull-right" to={this.props.nextLink} title={this.props.nextTitle}>
          <span>{this.props.nextTitle}</span>
          <span className="glyphicon glyphicon-chevron-right"></span>
        </Link>
      </div>
    );
  }
}

export default BlogNavigation;