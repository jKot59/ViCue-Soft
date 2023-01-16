import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App/App';
import BeerItemPage from './pages/BeerItemPage/BeerItemPage';
import { AnimatePresence } from 'framer-motion';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <AnimatePresence>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/beer/:id' element={<BeerItemPage />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </AnimatePresence>
  </React.StrictMode>
);
