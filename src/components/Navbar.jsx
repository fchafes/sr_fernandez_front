import './Navbar.css'

function Navbar() {
  return (
    <>
      <div className='sticky-container'>
        <div className='logo'>
          <h2>Sr. Fernandez</h2>
          <img src='src/assets/images/yellow_star.png' alt="decorative_yellow_star" />
        </div>
        <div className='navbar'>
          <div className='menu'>
            <ul>
              <li>ABOUT ME</li>
              -
              <li>WORKS</li>
              -
              <li>CONTACT</li>
              -
              <li><img src='src/assets/images/sr_iso.png' alt="iso_logo_elephant" /></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
