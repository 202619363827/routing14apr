
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Update import to include 'Routes'
import Home from './components/Home';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes> {/* Wrap Routes component around Route components */}
        <Route path="/" element={<Home />} /> {/* Use 'element' prop instead of 'component' */}
        <Route path="/contact" element={<Contact />} /> {/* Use 'element' prop instead of 'component' */}
      </Routes>
    </Router>
  );
};

export default App;