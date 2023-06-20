import './App.css';
import Experiences from './sections/Experiences';
import Contact from './sections/Contact';
import Projects from './sections/Projects';
import Navbar from './components/Navbar';
import Introduction from './sections/Introduction';
import About from './sections/About';
import Skills from './sections/Skills';

function App() {


  return (
    <div className="App">
    <header><Navbar></Navbar></header>
    <main>
      <section id="intro"><Introduction></Introduction></section>
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
