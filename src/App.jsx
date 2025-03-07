import { useState } from "react";
import {LoadingScreen} from "./components/loadingscreen"
import { Navbar } from "./components/tempNavbar";
import {About } from "./components/sections/About"
import {Home} from "./components/sections/Home"
import {Contact} from "./components/sections/Contact"
import {Projects} from "./components/sections/Projects"
import { MobileMenu } from "./components/MobileMenu";
import {Certifications} from "./components/sections/Certification";


import "./index.css";

function App() {
  const[isloaded,setisloaded]= useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {!isloaded&&<LoadingScreen oncomplete={()=>setisloaded(true)}/>} 
    <div className={`min-h-screen transition-opacity duration-700 ${isloaded ? "opacity-100":"opacity-0"}bg-black text-gray-100`}>
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Certifications/>
        <Contact />
    </div>
    </>
  );
}
export default App;