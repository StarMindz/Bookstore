import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import store from './redux/configureStore';
import Books from './components/Books';
import Categories from './components/Categories';
import Nav from './components/Nav';
import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Nav />
      <Routes className="appContainer">
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
