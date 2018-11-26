import React, { Component } from 'react';
import BlogNavigation from "../../BlogNavigation";

class BlogPost001 extends Component {
  render() {
    return (
      <div className="blog col-12 col-sm-8 col-md-9">
        <h1 className="blog-title">001 - Hello There! ;]</h1>
        <h4 className="blog-date">2017-01-01</h4>
        <p>
          Hello there!
          Welcome to my website, which is now also my blog.
          I decided a while back that I was going to do this whole blog thing, and today is the day I finally follow through on it.
          I plan on posting about my life, software development, and any other random musings that come to mind.
          I’m not sure if I’ll have a single reader, but I want to become a better writer and it feels like a good idea to write down some of my thoughts here.
        </p>
        <p>
          I’ll have a follow up post shortly about some of my New Year’s resolutions and how I hope to achieve them.
          If you made it this far, you’re awesome!
          Thanks for checking this out and I hope you’re intrigued enough to come back some time.
        </p>
        <BlogNavigation previousLink="/"
                        previousTitle="Back Home"
                        nextLink="/blog/002-500-miles"
                        nextTitle="002 - 500 Miles"/>
      </div>
    );
  }
}

export default BlogPost001;