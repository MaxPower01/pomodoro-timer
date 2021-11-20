import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* <TopBar /> */}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="" element={<Navigate replace to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
