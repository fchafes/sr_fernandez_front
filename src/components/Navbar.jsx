import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar({ scrollToLeft, scrollToAbout, handleGlitch }) {
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
      <div className='sticky-container'>
          <div className='menu'>
            <ul>
              <li><Link to="#" onClick={handleWorks}>WORKS</Link></li>
              -
              <li><Link to="#" onClick={handleAbout}>ABOUT</Link></li>
              -
              <li><Link to="#" onClick={handleContact}>CONTACT</Link></li>
              -
              <li><div className='iso-svg'></div></li>
            </ul>
          </div>
      </div>
    </>
  )
}

export default Navbar;
