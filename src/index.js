import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { store } from './store';

export const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
 <Provider store={store}>
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
 </Provider>
  
 // </React.StrictMode>
);

