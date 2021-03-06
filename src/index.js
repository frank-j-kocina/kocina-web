import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import ReactGA from 'react-ga';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactGA.initialize('UA-62522469-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();