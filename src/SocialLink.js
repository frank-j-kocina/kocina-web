import React, { Component } from 'react';

class SocialLink extends Component {
  render() {
    return (
      <a href={this.props.href} className="col-3" target="_blank" rel="noopener noreferrer">
        <img src={this.props.imgSrc} className="social-image" alt={this.props.imgAlt}/>
      </a>
    );
  }
}

export default SocialLink;