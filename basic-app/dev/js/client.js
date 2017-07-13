import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";


import App from './components/app';

const node = document.getElementById('root');

ReactDOM.render(<App />, node);