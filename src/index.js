import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} >
        <Route path='expenses' element={<Expenses />} />
        <Route path='invoices' element={<Invoices />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
