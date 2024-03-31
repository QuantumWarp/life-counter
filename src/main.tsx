import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { CssBaseline } from '@mui/material';
import { AppProvider } from './context/app-provider.tsx';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <CssBaseline />
      <App />
    </AppProvider>
  </React.StrictMode>
);
