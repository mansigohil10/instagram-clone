import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Profie from "./components/Profie";
<<<<<<< HEAD
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
=======
>>>>>>> a0d988da955c9adc217c5f05a4f650aff055f68f

function App() {
  return (   
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route exact path="/profile" element={<Profie />}></Route>
          </Routes>
<<<<<<< HEAD
          <ToastContainer theme="dark" />

=======
>>>>>>> a0d988da955c9adc217c5f05a4f650aff055f68f
    </div>
    </BrowserRouter>  
  );
}

export default App;
