import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';

function App() {
  return (
    <Router>
      <div style={{ width: '100%', height: '100%' }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;