import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import './assets/css/font-awesome.min.css';
import './assets/css/style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
