import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/common/navBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ReadArticle from './pages/ReadArticle';
import Footer from './components/common/footer';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/articles/:slug" element={<ReadArticle />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

