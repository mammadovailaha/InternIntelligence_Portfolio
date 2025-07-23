import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Project from "../Pages/Project/Project";

const AppRouter = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/project" element={<Project/>}/>
   </Routes>
  )
}

export default AppRouter
