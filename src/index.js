import React from 'react';
import ReactDOM from "react-dom";
import App from "./containers/App";
import ContextProvider from './containers/Context'







ReactDOM.render(
  
  <ContextProvider>  <App /></ContextProvider>
 
  
  ,
    document.getElementById('root')
  );