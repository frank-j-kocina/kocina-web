import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Row } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

import ScrollToTop from './ScrollToTop.js';
import Sidebar from './Sidebar.js';
import Home from './Home.js';
// import BlogPost from './BlogPost.js';
import BlogPost001 from './blog/posts/001-hello-there.js';
import BlogPost002 from './blog/posts/002-500-miles.js';
import BlogPost003 from './blog/posts/003-this-just-got-real.js';
import BlogPost004 from './blog/posts/004-down-but-not-out.js';

library.add(
    fas,
    faChevronLeft,
    faChevronRight);

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="page-container">
            <Row>
              <Sidebar/>
              <Route exact path="/" component={Home}/>
              <Route path="/blog/001-hello-there" component={BlogPost001}/>
              <Route path="/blog/002-500-miles" component={BlogPost002}/>
              <Route path="/blog/003-this-just-got-real" component={BlogPost003}/>
              <Route path="/blog/004-down-but-not-out" component={BlogPost004}/>

              {/* TODO - dynamic routing */}
              {/*<Route path="/blog/:post" component={BlogPost}/>*/}
            </Row>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
