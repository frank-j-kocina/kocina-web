import React, { Component } from 'react';
import github from './img/social/github.png';
import twitter from './img/social/twitter.png';
import facebook from './img/social/facebook.png';
import googleplus from './img/social/googleplus.png';
import SocialLink from "./SocialLink";

class Social extends Component {
  render() {
    return (
      <div className="social col-xs-12 text-center">
        <div className="row">
          <SocialLink href="https://github.com/frank-j-kocina" imgSrc={github} imgAlt="GitHub"/>
          <SocialLink href="https://twitter.com/FrankJKocina" imgSrc={twitter} imgAlt="Twitter"/>
          <SocialLink href="https://www.facebook.com/frank.j.kocina" imgSrc={facebook} imgAlt="Facebook"/>
          <SocialLink href="https://plus.google.com/+FrankKocina" imgSrc={googleplus} imgAlt="Google Plus"/>
        </div>
      </div>
    );
  }
}

export default Social;