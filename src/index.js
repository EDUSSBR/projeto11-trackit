import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import App from './App';
import { router } from './routes/router';
import GlobalStyle from './style/GlobalStyle';
import ResetStyle from './style/ResetStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);
