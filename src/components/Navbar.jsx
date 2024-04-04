import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleVisible } from "../redux/cursorReducer";

function Navbar({ scrollToLeft, scrollToAbout, handleGlitch }) {
  const dispatch = useDispatch();
  const handleWorks = () => {
    scrollToLeft();
  };
  const handleAbout = () => {
    scrollToAbout();
  };
  const handleContact = () => {
    handleGlitch();
  };

  return (
    <>
      <div
        className="sticky-container"
        
      >
        <div className="menu"
        onMouseEnter={() => dispatch(toggleVisible())}
        onMouseLeave={() => dispatch(toggleVisible())}>
          <ul>
            <li>
              <Link to="#" onClick={handleWorks}>
                WORKS
              </Link>
              <div className="under-line"></div>
            </li>
            -
            <li>
              <Link to="#" onClick={handleAbout}>
                ABOUT
              </Link>
              <div className="under-line"></div>
            </li>
            -
            <li>
              <Link to="#" onClick={handleContact}>
                CONTACT
              </Link>
              <div className="under-line"></div>
            </li>
            -
            <li>
              <Link to="#" onClick={handleWorks}>
                <div className="iso-svg"></div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
