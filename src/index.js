import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context/context';
import { reducer, initialState } from './context/reducer';
// redux store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider initialState={initialState} reducer={reducer}>

    <App />
  </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
