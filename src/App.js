import './App.css';
import Navbar from './components/Navbar';
import About from './sections/About';
import Skills from './sections/Skills';
import Experiences from './sections/Experiences';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import styled  from '@emotion/styled';

function App() {
  const AppContainer = styled.div `
    @media screen and (min-width: 1024px) and (max-width: 1439px){
      margin-left: 3rem;
    }
    
    main {
      @media screen and (min-width: 1440px) and (max-width: 2559px){
        
        width: 100rem;
      }
    }
  `
  

  return (
    <AppContainer className="App">
    <header><Navbar></Navbar></header>
    <main>
      <section id="about"><About></About></section>
      <section id="skills"><Skills></Skills></section>
      <section id="projects"><Projects></Projects></section>
      <section id="experiences"><Experiences></Experiences></section>
      <section id="contact"><Contact></Contact></section>
    </main>
    </AppContainer>
  );
}

export default App;
