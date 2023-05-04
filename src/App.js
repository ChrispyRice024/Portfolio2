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
  return (
    <div >
      <header>
        <Header />
      </header>
      <div className="App" id="repome">
        <Home />

        <SideDisplay />
      </div>
    </div>
  );
}

export default App;
