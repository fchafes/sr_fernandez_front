import './App.css'
import './assets/custom_fonts.css'
import Home from './pages/Home';
import Contact from './pages/Contact';
import WorkDetail from './pages/WorkDetail';
import { Routes, Route, Navigate } from "react-router-dom";
import { gsap } from 'gsap';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:url" element={<WorkDetail />} />

      </Routes>
    </>
  )
}

export default App
