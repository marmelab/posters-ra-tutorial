import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import runFakeServer from './fakeServer/restServer';

import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Permanent Marker', 'cursive'],
    },
});

runFakeServer();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
