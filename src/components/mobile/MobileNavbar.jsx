import "./MobileNavbar.css";
import { Link } from "react-router-dom";

function MobileNavbar({ handleGlitch }) {
  const handleClick = () => {
    handleGlitch();
  };

  return (
    <>
      <nav className="mobile-navbar">
        <Link to="#" className="mobile-navbar-logo" onClick={handleClick}>
          Sr. Fernandez
        </Link>
        <p>Menu</p>
      </nav>
      <div className="open-menu">
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
        <div className="mobile-menu-footer">sooooooooooy footer</div>
      </div>
    </>
  );
}

export default MobileNavbar;
