import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portraits from './pages/Portraits';
import Order from './pages/Order';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portraits" element={<Portraits />} />
          <Route path="/order" element={<Order />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
