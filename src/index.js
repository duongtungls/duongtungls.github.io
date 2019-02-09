import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './pages/index';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from "./store/store";
import firebase from "firebase/app";
import ReactGA from 'react-ga';

require('dotenv').config()

const env = process.env;

var config = {
  apiKey: env.REACT_APP_DEV_API_KEY,
  authDomain: env.REACT_APP_DEV_AUTH_DOMAIN,
  databaseURL: env.REACT_APP_DEV_DATABASE_URL,
  storageBucket: env.REACT_APP_DEV_STORAGE_BUCKET,
};

firebase.initializeApp(config);


const index = <Provider store={store}>
  <Index/>
</Provider>

const initializeReactGA = () => {
  ReactGA.initialize('UA-75381114-2');
  ReactGA.pageview('/homepage');
}
if (process.env.NODE_ENV === 'production') {
  initializeReactGA();
}

ReactDOM.render(index, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
