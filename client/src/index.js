import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-mjtbssq2fo3oxdjo.us.auth0.com"
    clientId="ZSuv7hz0rAEfg6srgU8l0WS0GsltD9p5"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    
    <App />
    
    
    </Auth0Provider>
);
