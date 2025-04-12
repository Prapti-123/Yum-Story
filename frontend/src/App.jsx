import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
import Nav from './components/Nav'

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
