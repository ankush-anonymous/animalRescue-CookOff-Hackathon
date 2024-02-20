import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import BlogsPage from "./Pages/BlogsPage";
import ViewNGOPage from "./Pages/ViewNGOPage";
import LoginPage from "./Pages/LoginPage";
import NgoDashboard from "./Pages/NgoDashboard";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/ngo" element={<ViewNGOPage />} />
          <Route path="/ngo/dashboard" element={<NgoDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
