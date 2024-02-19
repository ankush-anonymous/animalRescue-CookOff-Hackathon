import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import BlogsPage from "./Pages/BlogsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<BlogsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
