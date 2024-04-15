import "./App.css";
import "./assets/custom_fonts.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import WorkDetail from "./pages/WorkDetail";
import MobileHome from "./components/mobile/MobileHome";
import MobileAbout from "./pages/MobileAbout";
import { Routes, Route } from "react-router-dom";
import { CustomCursor } from "./components/CustomCursor";

function App() {
  const isMobile = () => {
    return window.innerWidth <= 768;
  };
  return (
    <>
      <CustomCursor />
      <Routes>
        {isMobile() ? (
          <>
            <Route path="/" element={<MobileHome />} />
            <Route path="/home" element={<MobileHome />} />
            <Route path="/about" element={<MobileAbout />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<Home />} />
          </>
        )}
        <Route path="/contact" element={<Contact />} />
        <Route path="/:url" element={<WorkDetail />} />
      </Routes>
    </>
  );
}

export default App;
