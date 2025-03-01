
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Blog from './pages/Blog';
import BlogListing from './pages/BlogListing';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Shipping from './pages/Shipping';
import Returns from './pages/Returns';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<BlogListing />} />
        <Route path="/blog/:slug" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
