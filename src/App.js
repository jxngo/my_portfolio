import './App.css';
import Navbar from './components/Navbar';
import About from './sections/About';
import Skills from './sections/Skills';
import Experiences from './sections/Experiences';
import Projects from './sections/Projects';
import Contact from './sections/Contact';


function App() {
  return (
    <div className="App">
    <header><Navbar></Navbar></header>
    <main>
      <section id="about"><About></About></section>
      <section id="skills"><Skills></Skills></section>
      <section id="projects"><Projects></Projects></section>
      <section id="experiences"><Experiences></Experiences></section>
      <section id="contact"><Contact></Contact></section>
    </main>
    </div>
  );
}

export default App;
