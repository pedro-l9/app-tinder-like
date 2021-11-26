import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { AccountProvider } from './components/AccountProvider';

ReactDOM.render(
  <React.StrictMode>
    <AccountProvider>
      <App />
    </AccountProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
