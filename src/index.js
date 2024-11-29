import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Landing from "./pages/Landing"
import FindJob from "./pages/FindJobs";
import Details from "./pages/JobDetails";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/" element={<Landing />} />
          <Route path="/find-job" element={<FindJob />} />
          <Route path="/job-details" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
