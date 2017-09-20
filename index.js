import 'babel-polyfill';
import render from 'react-dom';
import React,{PropTypes} from 'react';
import route from './route';
import {Router,browserHistory} from 'react-router';


render(
  <Router history={browserHistory} route={route}/>,
  document.getElementById('app')
);
