import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Social from './Social.js'
import profilePic from './img/me.png';

class Sidebar extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-4 col-md-3 text-center">
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
      </div>
    );
  }
}

export default Sidebar;