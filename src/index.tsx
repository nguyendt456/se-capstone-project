import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Root } from './components/root';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain='dev-lo4knocfxs314wi1.us.auth0.com'
        clientId='RkAlisYhjtKeVWx4J78w99MCpTImM4wP'
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
        useRefreshTokens={true}
	      cacheLocation="localstorage"
      >
      <Root/>
      </Auth0Provider>
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
