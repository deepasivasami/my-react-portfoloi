




import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Abouts from "./components/Abouts";
import Skill from "./components/Skill";
import Res from "./components/Res";

function App() {
  return (
    <>
   <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about"element={<Abouts/>}/>
        <Route path="/skill" element={<Skill/>}/>
        <Route path="/project" element={<Project />} />
        <Route path="/resume"element={<Res/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
