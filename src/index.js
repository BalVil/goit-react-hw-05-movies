import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import './index.css';
import 'modern-normalize/modern-normalize.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter
      basename={document.baseURI.substring(
        document.baseURI.indexOf(window.location.origin) +
          window.location.origin.length,
        document.baseURI.lastIndexOf('/')
      )}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
