import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BlogNavigation extends Component {
  render() {
    return (
      <div className="blog-navigation">
        {/* TODO - separate number from title, make more data driven */}
        <Link className="float-left" to={this.props.previousLink} title={this.props.previousTitle}>
          <FontAwesomeIcon icon="chevron-left" className="nav-left"/>
          <span>{this.props.previousTitle}</span>
        </Link>
        <Link className="float-right" to={this.props.nextLink} title={this.props.nextTitle}>
          <span>{this.props.nextTitle}</span>
          <FontAwesomeIcon icon="chevron-right" className="nav-right"/>
        </Link>
      </div>
    );
  }
}

export default BlogNavigation;