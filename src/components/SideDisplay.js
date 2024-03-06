import Home from "./Home.js";
import Repos from "./Repos.js";
import Contact from "./Contact.js";
import Resume from './Resume'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function SideDisplay() {

  const isMobile = window.innerWidth < 800
  return (
    <BrowserRouter>
      <div id='sideDisplay'>
        <div id='navBar'>
        {window.innerWidth < 800 ?(
            <>
              <Link to='/home'>Home</Link>
              {'|'}
            </>
          ) : null}
          <Link to="/Repos">Repositories</Link> | 
          <Link to="/resume"> Work History</Link> | 
          <Link to='/contact'> Contact</Link>

        </div>
        <div className='sideWindow'>
          <Routes>
            {
              isMobile ? (
                <>
                <Route path='/' element={<Home/>}/>
                <Route path='/repos' element={<Repos/>}/>
                </>
              ) :
              <Route path='/' element={<Repos/>}/>
            }
            <Route path="/repos" element={<Repos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/resume' element={<Resume/>}/>
            <Route path='/home' element={<Home/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
