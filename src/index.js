import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import './assets/style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
