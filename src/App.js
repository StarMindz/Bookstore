import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Nav from './components/Nav';
import './App.css';

const App = () => (
  <Router>
    <Nav />
    <Routes className="appContainer">
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </Router>
);

export default App;
