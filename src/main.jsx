import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import TaskManager from './pages/TaskManager';
import ApiData from './pages/ApiData';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="tasks" element={<TaskManager />} />
          <Route path="api" element={<ApiData />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
