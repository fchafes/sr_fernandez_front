import "./MobileNavbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function MobileNavbar({ handleGlitch }) {
  const handleClick = () => {
    handleGlitch();
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="mobile-navbar">
        <Link to="#" className="mobile-navbar-logo" onClick={handleClick}>
          Sr. Fernandez
        </Link>
        <p onClick={handleMenu}>Menu</p>
      </nav>
      <div className={`open-menu ${isMenuOpen ? "show-open-menu" : ""}`}>
        <ul>
          <li>
            <Link>works</Link>
          </li>
          <li>
            <Link>about</Link>
          </li>
          <li>
            <Link>contact</Link>
          </li>
        </ul>
        <div className="mobile-menu-footer">
          <Link>
            <img
              src="https://wbnzdyxchqficjywllpl.supabase.co/storage/v1/object/public/mi%20primer%20bucket/images/sr_iso_white.png"
              alt="isologo_elephant"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default MobileNavbar;
