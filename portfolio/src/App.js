import react from 'react';
import Home from './components/Home.js'
import Repos from './components/Repos'
import Header from './components/Header'



function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div>
        <Home />
        <Repos />
      </div>
      <footer>

      </footer>
    </div>
  );
}

export default App;
