import React, { Component } from 'react';
import BlogPostLink from "./BlogPostLink";

class AllBlogPosts extends Component {
  render() {
    return (
      <ul className="blog-post-list">
        <BlogPostLink number="001"
                      title="Hello There! ;]"
                      href="/blog/001-hello-there"/>
        <BlogPostLink number="002"
                      title="500 Miles"
                      href="/blog/002-500-miles"/>
        <BlogPostLink number="003"
                      title="This Just Got Real"
                      href="/blog/003-this-just-got-real"/>
        <BlogPostLink number="004"
                      title="Down, But Not Out"
                      href="/blog/004-down-but-not-out"/>
      </ul>
    );
  }
}

export default AllBlogPosts;