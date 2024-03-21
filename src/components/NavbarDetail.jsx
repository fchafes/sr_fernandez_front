import './NavbarDetail.css'
import { Link } from 'react-router-dom';

function NavbarDetail( { handleGlitch } ) {
  const handleClick = () => {
    handleGlitch();
  };

  return (
    <>
      <div className='sticky-container-detail'>
          <div className='menu'>
          <ul>
              <li><Link to="#" onClick={handleClick}>WORKS</Link></li>
              -
              <li><Link to="/">ABOUT</Link></li>
              -
              <li><Link to="/contact">CONTACT</Link></li>
              -
              <li><img src='src/assets/images/sr_iso_white.png' alt="iso_logo_elephant" /></li>
            </ul>
          </div>
      </div>
    </>
  )
}

export default NavbarDetail;