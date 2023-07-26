import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/test1/">Home</Link>
          </li>
          <li>
            <Link to="/test1/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/test1/" element={<Home />} />
        <Route path="/test1/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
