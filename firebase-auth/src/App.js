import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp";


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/kayit" element={<SignUp/>}/>
    <Route exact path="/giris" element={<Login/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
