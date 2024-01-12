import { BrowserRouter as Router } from 'react-router-dom'; // Importe BrowserRouter
import './App.scss';
import AppRouter from './Router';

function App() {
  return (
    <div className="app">
      <Router> {/* Envolve o AppRouter com o BrowserRouter */}
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
