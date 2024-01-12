import { Element } from 'react-scroll';
import Menu from './components/common/Menu';
import Home from './pages/Home';
import Footer from './components/common/Footer';
import Skills from './pages/Skills';
import Livros from './pages/Livros';
import Projects from './pages/Projects';

function AppRouter() {
  return (
    <div>
      <Menu />
      <Element name="home">
        <Home />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        <Projects/>
      </Element>
      <Element name="livros">
        <Livros />
      </Element>
      <Footer />
    </div>
  );
}

export default AppRouter;
