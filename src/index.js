import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Baselayout from './components/Baselayout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Baselayout />

  , document.getElementById('root'));
registerServiceWorker();
