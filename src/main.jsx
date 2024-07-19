import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import App from './App.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import Team from './Pages/Team/Team.jsx';
import Bar from './Pages/Bar/Bar.jsx';
import Calendar from './Pages/Calendar/Calendar.jsx';
import Contacts from './Pages/Contacts/Contacts.jsx';
import FAQ from './Pages/FAQ/FAQ.jsx';
import Form from './Pages/Form/Form.jsx';
// import Geography from './Pages/Geography/Geography.jsx'
import Invoices from './Pages/Invoices/Invoices.jsx';
import Line from './Pages/Line/Line.jsx';
import Pie from './Pages/Pie/Pie.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/React-Dashboard'>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/form" element={<Form />} />
          <Route path="/line" element={<Line />} />
          <Route path="/pie" element={<Pie />} />
          {/* <Route path="/geography" element={<Geography />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
