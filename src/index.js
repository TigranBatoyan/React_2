import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import App1 from "./test/App1";
// import App2 from "./Reducer/App2";
// import App3 from "./Booking/App3";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
