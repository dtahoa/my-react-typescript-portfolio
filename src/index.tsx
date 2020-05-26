import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { createStore, applyMiddleware, combineReducers  } from 'redux';
import { StoreContext } from 'redux-react-hook';
import { ApiReducer } from 'cinchy';

import Logger from 'redux-logger';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import resources from './languages';

import './index.scss';
import * as serviceWorker from './serviceWorker';
import App from './App';

i18n.use(LanguageDetector).use(initReactI18next)
.init({resources, fallbackLng: 'en-US', debug: true,
keySeparator: false, interpolation: { escapeValue: false }});


const combinedReducers = combineReducers({api: ApiReducer });
const middlewares = [thunk, promiseMiddleware, Logger];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(combinedReducers);


ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
