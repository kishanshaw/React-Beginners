import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './Containers/App';

ReactDOM.render(<App title = "Persons Manager" />, document.getElementById('root'));
registerServiceWorker();
