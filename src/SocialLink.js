import React, { Component } from 'react';
import { Col } from 'reactstrap';

class SocialLink extends Component {
  render() {
    return (
      <Col xs="4" className="col-no-pad">
        <a href={this.props.href} target="_blank" rel="noopener noreferrer">
          <img src={this.props.imgSrc} className="social-image" alt={this.props.imgAlt}/>
        </a>
      </Col>
    );
  }
}

export default SocialLink;