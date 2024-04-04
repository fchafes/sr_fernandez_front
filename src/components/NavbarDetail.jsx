import './NavbarDetail.css'
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { toggleVisible } from "../redux/cursorReducer";

function NavbarDetail( { handleGlitch, handleContactGlitch } ) {
  const dispatch = useDispatch();
  const handleClick = () => {
    handleGlitch();
  };
  const handleContactClick = () => {
    handleContactGlitch();
  };

  return (
    <>
      <div className='sticky-container-detail'
      onMouseEnter={() => dispatch(toggleVisible())}
      onMouseLeave={() => dispatch(toggleVisible())}>
          <div className='menu'>
          <ul>
              <li><Link to="#" onClick={handleClick}>WORKS</Link></li>
              -
              <li><Link to="#" onClick={handleClick}>ABOUT</Link></li>
              -
              <li><Link to="#" onClick={handleContactClick}>CONTACT</Link></li>
              -
              <li><Link to="#" onClick={handleClick}><img src='https://wbnzdyxchqficjywllpl.supabase.co/storage/v1/object/public/mi%20primer%20bucket/images/sr_iso_white.png' alt="iso_logo_elephant" /></Link></li>
            </ul>
          </div>
      </div>
    </>
  )
}

export default NavbarDetail;
