import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages';
import Productos from './pages/productos';
import faq from './pages/faq';
import Ayuda from './pages/ayuda';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Index} />
        <Route path='/productos' component={Productos} />
        <Route path='/faq' component={faq} />
        <Route path='/ayuda' component={Ayuda} />
      </Routes>
    </Router>
  );
}

export default App;
