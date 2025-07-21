import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";

const AppRouter = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
   </Routes>
  )
}

export default AppRouter
