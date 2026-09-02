import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Habilidades from './components/Habilidades';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Habilidades />
        <Projetos />
        <Contato />
      </main>
      <Footer />  
    </>
  );
}

export default App; 