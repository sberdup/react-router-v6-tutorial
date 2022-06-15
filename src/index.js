import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';
import Invoice from './routes/invoice';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} >
        <Route path='expenses' element={<Expenses />} />
        <Route path='invoices' element={<Invoices />} >
          {/* An index route provides a 'default' selection when no sub-route is loaded in yet */}
          <Route index element={
            <main style={{padding:'1rem'}}>
              <p>Select an invoice</p>
            </main>
          }
          />
          {/* the path on this nested set of routes will define the parameter we'll grab in Invoice to map the URLs */}
          <Route path=':invoiceId' element={<Invoice />} />
        </Route>
        {/* The below route handles any weird url under the default app '/' url */}
        <Route path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
