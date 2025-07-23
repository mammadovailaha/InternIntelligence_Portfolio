import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";

const AppRouter = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
   </Routes>
  )
}

export default AppRouter
