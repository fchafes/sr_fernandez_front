import "./MobileNavbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function MobileNavbar({ handleGlitch }) {
  const handleWorks = () => {
    handleGlitch();
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="mobile-navbar">
        <Link to="#" className="mobile-navbar-logo" onClick={handleWorks}>
          Sr. Fernandez
        </Link>
        <div onClick={handleMenu} className="menu-button">
          <div className={`line-1 ${isMenuOpen ? "line-1-x" : ""}`}></div>
          <div className={`line-2 ${isMenuOpen ? "line-2-x" : ""}`}></div>
        </div>
      </nav>
      <div className={`open-menu ${isMenuOpen ? "show-open-menu" : ""}`}>
        <ul>
          <li>
            <Link onMouseUp={handleWorks}>works</Link>
          </li>
          <li>
            <Link>about</Link>
          </li>
          <li>
            <Link>contact</Link>
          </li>
          <li>
            <Link>
              <img
                src="https://wbnzdyxchqficjywllpl.supabase.co/storage/v1/object/public/mi%20primer%20bucket/images/sr_iso_white.png"
                alt="isologo_elephant"
              />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MobileNavbar;
