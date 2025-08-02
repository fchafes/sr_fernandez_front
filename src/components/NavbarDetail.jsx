import "./NavbarDetail.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleVisible } from "../redux/cursorReducer";

function NavbarDetail({ handleGlitch, handleContactGlitch }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    handleGlitch();
  };
  const handleContactClick = () => {
    handleContactGlitch();
  };

  return (
    <>
      <div className="sticky-container-detail">
        <div
          className="menu"
          onMouseEnter={() => dispatch(toggleVisible())}
          onMouseLeave={() => dispatch(toggleVisible())}
        >
          <ul>
            <li>
              <Link to="#" onClick={handleClick}>
                WORKS
              </Link>
              <div className="under-line"></div>
            </li>
            -
            <li>
              <Link to="#" onClick={handleClick}>
                ABOUT
              </Link>
              <div className="under-line"></div>
            </li>
            -
            <li>
              <Link to="#" onClick={handleContactClick}>
                CONTACT
              </Link>
              <div className="under-line"></div>
            </li>
            -
            <li>
              <Link to="#" onClick={handleClick}>
                <img
                  src="/assets/images/sr_iso_white.png"
                  alt="iso_logo_elephant"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavbarDetail;
