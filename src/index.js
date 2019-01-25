import React from 'react';
import ReactDOM from 'react-dom';
import * as go from 'gojs';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const gojsKey = process.env.REACT_APP_GOJS_KEY;

if (gojsKey) {
    // tslint:disable-next-line:no-any
    go.licenseKey = gojsKey;
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
