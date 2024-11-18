import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import LoginSignup from "./components/login";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import VideoPlayer from "./components/VideoPlayer";
import UserDashboard from "./components/User";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginSignup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/video/:id" element={<VideoPlayer />} />
        <Route path="/user" element={<UserDashboard />} />
      </Routes>
    </div>
  );
};

export default App;
