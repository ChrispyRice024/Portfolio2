import Home from "./Home.js";
import Repos from "./Repos.js";
import Contact from "./Contact.js";
import Resume from './Resume'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function SideDisplay() {
  return (
    <BrowserRouter>
      <div id='sideDisplay'>
        <div id='navBar'>
          <Link to="/">Repositories</Link> | 
          <Link to="/resume"> Work History</Link> | 
          <Link to='/contact'> Contact</Link>
        </div>
        <div className='sideWindow'>
          <Routes>
            <Route path="/" element={<Repos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/resume' element={<Resume/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
