import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application';
import registerServiceWorker from './registerServiceWorker';

// Styles
import './assets/Application.css';


ReactDOM.render(<Application />, document.getElementById('application'));
registerServiceWorker();
