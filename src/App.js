import react from 'react';
import Home from './components/Home.js'
import Repos from './components/Repos.js'
import Header from './components/Header.js'
import ProjectWindow from './components/ProjectWindow'
import './App.css'


function App() {

       
  return (
    
    <div className="App">
      <header >
        <Header />
      </header>
      <div id='repome'>
        <Home />
        <Repos />
      </div>
      <footer>

      </footer>
    </div>
  );
}

export default App;
