import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import './main.css'

import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
    <Router>
      <AuthProvider>
    <App />
      </AuthProvider>
    </Router>
      </QueryClientProvider>
  </StrictMode>,
)

