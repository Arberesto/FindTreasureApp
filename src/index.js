import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainPage from "./mainPage/MainPage";
import Helmet from "react-helmet"

ReactDOM.render(
  <React.StrictMode>
    <Helmet title='hat'/> { /* Should it really be called 'Hat'? I don't quite remember... */ }
    <MainPage/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
