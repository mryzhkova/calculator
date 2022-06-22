import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import GlobalStyles from './globalStyles';


const root = ReactDOM.createRoot(
  document.getElementById('root'),
);

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <App />
      <GlobalStyles />
    </ErrorBoundary>
  </BrowserRouter>,
);
