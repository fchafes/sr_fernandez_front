import './Home.css'
import Marquee from "react-fast-marquee";
import HorizontalScroll from '../components/HorizontalScroll';
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import StickyNote from '../components/StickyNote';
import stickyNotesData from '../data/stickyNotesData';

function Home() {
  const stickyText = stickyNotesData;

  return (
    <>
      <HorizontalScroll>
      <Navbar/>
      <div className='home-container'>
        <div className='text-box'>
          <div className='logo'>
            <h2>Sr. Fernandez</h2>
            <img src='src/assets/images/yellow_star.png' alt="decorative_yellow_star" />
          </div>
          <div className='title-and-sub'>
            <h1>DIRECTION<br />ARTISTIQUE</h1>
            <h3>BRANDING / GRAPHISME / PHOTOGRAPHIE /<br/> MOTION DESIGN / ILLUSTRATION / SCENOGRAPHIE</h3>
          </div>
        </div>
        <div className='works-container'>
          
          {/* ------ PETIT BALLON ------ */}

          <div className='work-box' id='petit-ballon'>
            <Link to="/lpb-box-premium">
              <div className='big-content'>
                <img src="src/assets/gif/petit_ballon.gif" alt="petit_ballon_gif" />
              </div>
              <h2>LE PETIT BALLON</h2>
            </Link>
            <div className='message-box'>
              <p>Créativité et l'innovation<br /> au service des idées</p>
              <img src="src/assets/images/smile.png" alt="smiley_face" className='smile-img'/>
            </div>
          </div>
          
          {/* ------ PETIT BALLON 2 ------ */}

          <div className='work-box' id='petit-ballon-2'>
            <Link to="/lpb-foire-aux-vin">
              <div className='big-content'>
                <img src="src/assets/images/main_petit_ballon.jpg" alt="photo_set_bottles" />
              </div>
            </Link>
            <div className='arrow_wine_box'>
              <img src="src/assets/images/arrow_wine.png" alt="arrow_pointing_wine"/>
              <p>cliquez pour voir ce<br />qu'il y a à l'intérieur</p>
            </div>
            <div className='extra-content'>
              <img src="src/assets/images/bottle_petit_ballon_low.png" alt="wine_bottle" className='wine_bottle'/>
            </div>
          </div>
          
          {/* ------ AA ------ */}

          <div className='work-box' id='aa'>
            <Link to="/aa">
              <img src="src/assets/images/petit-ballon-squares.png" alt="" />
            </Link>
            <Marquee className='marquee'>Sr. Fernandez - Sr. Fernandez -&nbsp;</Marquee>
          </div>
          
          {/* ------ PLAYTIME PARIS ------ */}

          <div className='work-box' id='playtime-paris'>
          <Link to="/playtime-paris-ny">
            <div className='big-content'>
              <img src="src/assets/images/stars_whale.png" alt="decorative-stars" className='stars-img'/>
              <img src="src/assets/gif/whale.gif" alt="whale" className='whale-img'/>
              <img src="src/assets/images/playtime_home.png" alt="playtime_paris_poster" />
            </div>
            <h2>PLAYTIME PARIS - NY</h2>
          </Link>
          </div>

          {/* ------ ZONZA ------ */}

          <div className='work-box' id='zonza'>
            <Link to="/zonza">
              <h2>ZONZA!</h2>
            </Link>
            <img src="src/assets/images/stars_whale.png" alt="decorative-stars" className='zonza-stars'/>
            <div className='big-content'>
              <Link to="/zonza">
                <img src="src/assets/images/zonza.jpg" alt="zonza_bottles" />
              </Link>
            </div>
          </div>
          
          {/* ------ OMY EXTRA ------ */}

          <div className='work-box' id='omy-extra'>
            <div className='message-box'>
              <p>cliquez ici pour<br />rencontrer<br />mes potes</p>
              <img src="src/assets/images/arrow.png" alt="arroy" className='arrow-img'/>
            </div>
            <div className='big-content'>
            <Link to="/omy-3d">
              <img src="src/assets/images/tiger.png" alt="tiger" />
            </Link>
            </div>
            <img src="src/assets/images/yellow_tape.png" alt="" className='tape-img'/>
          </div>

          {/* ------ OMY MAIN ------ */}

          <div className='work-box' id='omy-main'>
            <Link to="/omy-stick-it">
              <h2>OMY</h2>
            </Link>
            <div className='big-content'>
              <Link to="/omy-stick-it">
                <img src="src/assets/images/omy_pack.png" alt="omy_packaging" />
              </Link>
              <img src="src/assets/images/stars_whale.png" alt="decorative-stars" className='omy-stars'/>
            </div>
          </div>
          
          {/* ------ KIEHL'S ------ */}

          <div className='work-box' id='kiehls'>
            <div className='align-box'>
              <h2>KIEHL'S</h2>
              <div className='big-content'>
                <img src="src/assets/gif/kiehls.gif" alt="kiehls_product" />
              </div>
            </div>
          </div>

          {/* ------ PAIKEA ------ */}

          <div className='work-box' id='paikea'>
            <div className='align-box'>
              <div className='big-content'>
                <Link to="/paikea">
                  <img src="src/assets/images/paikea.png" alt="paikea_street_poster" />
                </Link>
              </div>
              <Link to="/paikea">PAIKEA</Link>
            </div>
          </div>

          {/* ------ CIDER ------ */}

          <div className='work-box' id='cider'>
            <Link to="/cider">
              <h2>CIDER</h2>
            </Link>
            <div className='big-content'>
              <Link to="/cider">
                <img src="src/assets/images/organic_shape.png" alt="cider" />
              </Link>
            </div>
          </div>
        </div>


        {/* ------ ABOUT CONTAINER ------ */}


        <div className='about-container'>
          <div className='big-about'>
            <h3>ABOOOUT!&nbsp;&nbsp;</h3>
          </div>
          <div className='big-about' id='behind'>
            <h3>AB</h3>
            <img src="src/assets/gif/about.gif" alt="" />
          </div>
          <div className='sticker-container'>
          <div className='sticker-container-relative'>
            <img src="src/assets/images/sticker.png" alt="" id='sticker'/>
            <img src="src/assets/images/yellow_tape.png" alt="" className='yellow_tape' id='first'/>
            <StickyNote startPoint="first" endPoint="visible-1" data={stickyText[0].text} />
            <StickyNote startPoint="second" endPoint="visible-2" data={stickyText[1].text} />
            <StickyNote startPoint="third" endPoint="visible-3" data={stickyText[2].text} />
            <img src="src/assets/images/yellow_tape.png" alt="" className='yellow_tape' id='second'/>
          </div>
          </div>
          <div className='contact-container'>
            <div className='contact-button'>
              <p>CONTACT!</p>
            </div>
            <img src="src/assets/images/stars.png" alt="decorative_stars" id='stars'/>
            <img src="src/assets/images/big_iso.png" alt="elephant_logo" id='big-iso'/>
            <div className='contact-message'>
              <img src="src/assets/images/big_smile.png" alt="smiley_face"/>
              <h4>Nous sommes faits pour<br /> travailler ensemble.</h4>
            </div>
          </div>
        </div>
      </div>
      </HorizontalScroll>
    </>
  )
}

export default Home;
