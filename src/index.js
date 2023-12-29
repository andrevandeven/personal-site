import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './components/navbar';
import About from "./routes/about";
import Pictures from "./routes/pictures";
import Turtles from "./routes/gallery-sections/turtles";
import FishPortraits from "./routes/gallery-sections/portraits";
import Macro from "./routes/gallery-sections/macro.jsx";
import Sharks from "./routes/gallery-sections/sharks.jsx";
import Camo from "./routes/gallery-sections/camo.jsx";
import Wide from "./routes/gallery-sections/wide.jsx";
import { CustomCursor } from './components/cursor';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CustomCursor />
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="pictures" element={<Pictures />} />
      <Route path="pictures/turtles" element={<Turtles />} />
      <Route path="pictures/fish-portraits" element={<FishPortraits />} />
      <Route path="pictures/macro" element={<Macro />} />
      <Route path="pictures/sharks&rays" element={<Sharks />} />
      <Route path="pictures/masters-of-camouflage" element={<Camo />} />
      <Route path="pictures/wide-angle" element={<Wide />} />
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
