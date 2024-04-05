import "./App.css";
import "./assets/custom_fonts.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import WorkDetail from "./pages/WorkDetail";
import MobileHome from "./components/mobile/MobileHome";
import { Routes, Route, Navigate } from "react-router-dom";
import { CustomCursor } from "./components/CustomCursor";

function App() {
  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mobile-home" element={<MobileHome />} />
        <Route path="/:url" element={<WorkDetail />} />
      </Routes>
    </>
  );
}

export default App;
