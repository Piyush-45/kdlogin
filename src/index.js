import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
import { AuthProvider } from './context/AuthContext';
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App classname="bg-red-900"/>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
