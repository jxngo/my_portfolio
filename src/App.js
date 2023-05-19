import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Experiences from './pages/Experiences'
import Projects from './pages/Projects'
import Navbar from './components/Navbar';
import About from './pages/About';


function App() {


  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
