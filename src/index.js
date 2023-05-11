import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './components/navbar';
import About from "./routes/about"; // import About
import Projects from "./routes/projects"; // import Projects
import { CustomCursor } from './components/cursor';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CustomCursor />
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="projects" element={<Projects />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
