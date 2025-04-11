import React from 'react';
import './tailwind.css';
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import WalletContextProvider from './WalletProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WalletContextProvider>
      <App />
    </WalletContextProvider>
  </React.StrictMode>
);
