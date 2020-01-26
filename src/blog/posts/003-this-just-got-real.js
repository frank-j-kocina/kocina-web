import React, { Component } from 'react';
import { Col } from 'reactstrap';
import BlogNavigation from "../../BlogNavigation";
import proof from '../../img/blog/003-proof.png'

class BlogPost003 extends Component {
  render() {
    return (
      <Col xs="12" sm="8" md="9" className="blog">
        <h1 className="blog-title">003 - This Just Got Real</h1>
        <h4 className="blog-date">2017-02-03</h4>
        <p className="blog-img-p">
          <img src={proof} alt="Proof"/>
        </p>
        <p>
          To quote Martin Lawrence in Bad Boys, “<a href="https://www.youtube.com/watch?v=uvqJ1mTkEuY" target="_blank" rel="noopener noreferrer">Shit just got real.</a>”
          Registration for the 2017 Medtronic Twin Cities Marathon opened yesterday and I immediately signed up.
          I am super excited and a little less scared than I probably should be.
          I don’t think it has fully sunk in yet, but I’ve paid for it.
          I’m going to do this!
        </p>
        <p>
          I’ve gotten a ton of encouragement already from runners and non-runners alike, and this has pumped me up even more.
          My boss, who is <a href="http://www.superiorfalltrailrace.com/100-mile-info/" target="_blank" rel="noopener noreferrer">an ultra-marathoner</a>, told me candidly that training for your first marathon is a blast.
          The marathon itself sucks!
          I can definitely see how someone would say that.
          I’ve had much shorter runs in which I just wanted to stop halfway through and hated myself after pushing on.
          But whenever I complete one of those runs, I always feel a greater sense of accomplishment than when I breeze through an easy run.
        </p>
        <p>
          I know that this will be the hardest physical challenge of my life thus far, but I’m feeling really confident right now.
          I’m going to do this!
        </p>
        <BlogNavigation previousLink="/blog/002-500-miles"
                        previousTitle="002 - 500 Miles"
                        nextLink="/blog/004-down-but-not-out"
                        nextTitle="004 - Down, But Not Out"/>
      </Col>
    );
  }
}

export default BlogPost003;