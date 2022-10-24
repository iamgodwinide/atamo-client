import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import App2 from './App2';

const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <App2 />
    </AlertProvider>
  </React.StrictMode>
);
