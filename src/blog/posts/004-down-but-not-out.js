import React, { Component } from 'react';
import { Col } from 'reactstrap';
import BlogNavigation from "../../BlogNavigation";

class BlogPost004 extends Component {
  render() {
    return (
      <Col xs="12" sm="8" md="9" className="blog">
        <h1 className="blog-title">004 - Down, But Not Out</h1>
        <h4 className="blog-date">2017-04-10</h4>
        <p>
          It’s been a while since I’ve checked in here.
          I think part of the reason I started writing this blog is that I wanted to hold myself publicly accountable.
          Failure is something I am absolutely terrified of, but public failure is unthinkable for me.
          I certainly have not failed yet, but I was on track to do so.
          I’ve only run a little over 40 miles in the past two months.
          Part of this was out of my control, but I can do better.
          I was down, but I am definitely not out yet.
        </p>
        <p>
          February sucked.
          I developed a case of Plantar Fasciitis and initially tried to power through it, which any seasoned runner will tell you is a terrible idea.
          After a few days of my feet getting progressively worse, I made the smart decision and gave in.
          This was not a fun injury.
          It took until mid March for me to fully recover.
          Despite this injury, I ran the Hot Dash 10 mile on March 18th and <a href="http://www.mtecresults.com/runner/show?race=4936&rid=1488" target="_blank" rel="noopener noreferrer">got a personal best by about six and a half minutes</a>!
        </p>
        <p>
          I have no excuse for the rest of March.
          I ran once between the Hot Dash and my next speed bump.
          I am not proud of that, but it is what it is.
          I see my mistake and I know I can’t afford to do that again if I want to succeed this fall.
        </p>
        <p>
          Since the beginning of April I have been plagued by this awful sickness.
          Even as I write this, my throat and voice are not 100%, although I am getting close.
          I was hoping this would be a two or three day illness, but I have had no such luck.
        </p>
        <p>
          So here we are.
          It is April 10th and I need to get back on the wagon.
          Tonight I was tired, I ate too much for dinner, and I had work that needed to get done.
          Lots of excuses that would have flown before, but not any more.
          So tonight, despite rain, sleet, and snow, (seriously) I ran the 4.8 miles scheduled in my marathon training program.
          It was supposed to be a slow, easy run based on my past race performances.
          That was not the case.
          It was awful, but it needed to happen.
        </p>
        <p>
          Quitting is so easy.
          Starting again is hard.
          This time it was <strong>really</strong> hard.
          Some of the obstacles were out of my control, but others were just me being lazy and making excuses.
          I am back at it.
          I’ve officially started on my marathon training program.
          I will not fail.
        </p>
        <BlogNavigation previousLink="/blog/003-this-just-got-real"
                        previousTitle="003 - This Just Got Real"
                        nextLink="/"
                        nextTitle="Back Home"/>
      </Col>
    );
  }
}

export default BlogPost004;