import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ImageUpload from './ImageUpload';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/image-upload">画像をアップロードする</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/image-upload" element={<ImageUpload />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

