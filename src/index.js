import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {Provider2} from './Context/Context'
import { BrowserRouter } from 'react-router-dom';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
    <Provider store={store}>
      <Provider2>
        <App />
      </Provider2>
    </Provider>
  </BrowserRouter>
  </>
);
