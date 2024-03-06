import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className='sticky-container'>
          <div className='menu'>
            <ul>
              <li><Link to="/">WORKS</Link></li>
              -
              <li><Link to="/">ABOUT</Link></li>
              -
              <li><Link to="/">CONTACT</Link></li>
              -
              <li><img src='src/assets/images/sr_iso.png' alt="iso_logo_elephant" /></li>
            </ul>
          </div>
      </div>
    </>
  )
}

export default Navbar;
