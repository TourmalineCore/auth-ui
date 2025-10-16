import './styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { ThemeProvider } from './theme/themeContext';
import { authService } from './common/authService';

ReactDOM.render(
  <React.StrictMode>
    <authService.AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </authService.AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
