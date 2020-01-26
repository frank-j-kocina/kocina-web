import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import Social from './Social.js';
import profilePic from './img/me.png';

class Sidebar extends Component {
  render() {
    return (
      <Col xs="12" sm="4" md="3" className="text-center">
        <Link to="/">
          <img src={profilePic} className="profile-pic" alt="Me!"/>
        </Link>
        <div className="hidden-xs">
          {/* TODO - not sure i love this */}
          <h3>Frank J Kocina</h3>
          <h5>Software Engineering Ninja Wizard from Minneapolis, MN.</h5>
          <h5>I press buttons on a keyboard to make computers do cool things!</h5>
          <Social/>
        </div>
      </Col>
    );
  }
}

export default Sidebar;