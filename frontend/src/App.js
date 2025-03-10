
import './App.css';
import React, { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Profie from "./screens/Profie";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Createpost from './screens/Createpost';
import { LoginContext } from "./context/LoginContext";
import Modal from "./components/Modal";
import logo from "./logo.svg";
import UserProfie from "./components/UserProfile";
import MyFolliwngPost from "./screens/MyFollowingPost";
import { GoogleOAuthProvider } from '@react-oauth/google';

;

function App() {
  const [userLogin, setUserLogin] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  return (   
    <BrowserRouter>
    <div className="App">
    <GoogleOAuthProvider clientId="351051626851-nfehr69hirecgvmnq161gaue1o4pdt7c.apps.googleusercontent.com">
    <LoginContext.Provider  value={{ setUserLogin , setModalOpen}}>
          <Navbar login={userLogin}/>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route exact path="/profile" element={<Profie />}></Route>
            <Route path="/createPost" element={<Createpost />}></Route>
            <Route path="/profile/:userid" element={<UserProfie />}></Route>
            <Route path="/followingpost" element={<MyFolliwngPost />}></Route>
          </Routes>
          <ToastContainer theme="dark" />

          {modalOpen && <Modal setModalOpen={setModalOpen}></Modal>}
          
        </LoginContext.Provider>
        </GoogleOAuthProvider>
    </div>
    </BrowserRouter>  
  );
}

export default App;
