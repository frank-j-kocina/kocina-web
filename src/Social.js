import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import github from './img/social/github.png';
import twitter from './img/social/twitter.png';
import facebook from './img/social/facebook.png';
import SocialLink from './SocialLink';

class Social extends Component {
  render() {
    return (
      <Col xs="12" className="social text-center">
        <Row>
          <SocialLink href="https://github.com/frank-j-kocina" imgSrc={github} imgAlt="GitHub"/>
          <SocialLink href="https://twitter.com/FrankJKocina" imgSrc={twitter} imgAlt="Twitter"/>
          <SocialLink href="https://www.facebook.com/frank.j.kocina" imgSrc={facebook} imgAlt="Facebook"/>
        </Row>
      </Col>
    );
  }
}

export default Social;