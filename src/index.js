import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Notfound } from './containers/Notfound';
import { Blog } from './containers/Blog';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='*' element={<Notfound />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

