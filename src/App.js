import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { Navbar } from './components/Navbar';
import { Resume } from './pages/Resume';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
