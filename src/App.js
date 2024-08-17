import react from "react";
import Home from "./components/Home.js";
import Repos from "./components/Repos.js";
import Header from "./components/Header.js";
import ProjectWindow from "./components/ProjectWindow";
import Contact from "./components/Contact";
import SideDisplay from "./components/SideDisplay";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {

  const display = window.innerWidth < 800 ? 'none' : ''
  return (
    <div >
      <header>
        <Header />
      </header>
      <div className="App" id="repome">
        <div id='home' style={{display: display}}><Home /></div>
        

        <SideDisplay />
      </div>
    </div>
  );
}

export default App;
