import Menu from './components/common/Menu';
import './App.scss'
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
      <Menu />
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
