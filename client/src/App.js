import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import BlogsPage from "./Pages/BlogsPage";
import ViewNGOPage from "./Pages/ViewNGOPage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/ngo" element={<ViewNGOPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
