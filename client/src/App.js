import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormSelection from './components/FormSelection';
import FormPage from './components/FormPage';
import DataList from './components/DataList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormSelection />} />
        <Route path="/form/:formType" element={<FormPage />} />
        <Route path="/entries" element={<DataList />} />
      </Routes>
    </Router>
  );
}

export default App;
