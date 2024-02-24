import './App.css'
import './assets/custom_fonts.css'
import Navbar from './components/Navbar'
import Marquee from "react-fast-marquee";
import HorizontalScroll from './components/HorizontalScroll';

function App() {
  return (
    <>
      <Navbar/>
      <HorizontalScroll>
      <div className='home-container'>
        <div className='text-box'>
          <h1>DIRECTION<br />ARTISTIQUE</h1>
          <h3>BRANDING / GRAPHISME / PHOTOGRAPHIE /<br/> MOTION DESIGN / ILLUSTRATION / SCENOGRAPHIE</h3>
        </div>
        <div className='works-container'>
          
          {/* ------ PETIT BALLON ------ */}

          <div className='work-box' id='petit-ballon'>
            <div className='big-content'>
              <img src="src/assets/gif/petit_ballon.gif" alt="petit_ballon_gif" />
            </div>
            <h2>LE PETIT BALLON</h2>
            <div className='message-box'>
              <p>Créativité et l'innovation<br /> au service des idées</p>
              <img src="src/assets/images/smile.png" alt="smiley_face" className='smile-img'/>
            </div>
          </div>
          
          {/* ------ PETIT BALLON 2 ------ */}

          <div className='work-box' id='petit-ballon-2'>
            <div className='big-content'>
              <img src="src/assets/images/main_petit_ballon.jpg" alt="photo_set_bottles" />
            </div>
            <div className='extra-content'>
              <img src="src/assets/images/bottle_petit_ballon_low.png" alt="wine_bottle" />
            </div>
          </div>
          
          {/* ------ PETIT BALLON 3 ------ */}

          <div className='work-box' id='petit-ballon-3'>
            <img src="src/assets/images/petit-ballon-squares.png" alt="" />
            <Marquee className='marquee'>Sr. Fernandez - Sr. Fernandez -&nbsp;</Marquee>
          </div>
          
          {/* ------ PLAYTIME PARIS ------ */}

          <div className='work-box' id='playtime-paris'>
            <div className='big-content'>
              <img src="src/assets/images/whale.png" alt="whale" className='whale-img'/>
              <img src="src/assets/gif/playtime.gif" alt="playtime_paris_poster" />
            </div>
            <h2>PLAYTIME PARIS - NY</h2>
          </div>

          {/* ------ ZONZA ------ */}

          <div className='work-box' id='zonza'>
            <h2>ZONZA!</h2>
            <div className='big-content'>
              <img src="src/assets/images/zonza.jpg" alt="zonza_bottles" />
            </div>
          </div>
          
          {/* ------ OMY EXTRA ------ */}

          <div className='work-box' id='omy-extra'>
            <div className='message-box'>
              <p>cliquez ici pour<br />rencontrer<br />mes potes</p>
              <img src="src/assets/images/arrow.png" alt="arroy" className='arrow-img'/>
            </div>
            <div className='big-content'>
              <img src="src/assets/images/tiger.png" alt="tiger" />
            </div>
            <img src="src/assets/images/yellow_tape.png" alt="" className='tape-img'/>
          </div>

          {/* ------ OMY MAIN ------ */}

          <div className='work-box' id='omy-main'>
            <h2>OMY</h2>
            <div className='big-content'>
              <img src="src/assets/images/omy_pack.png" alt="omy_packaging" />
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
                <img src="src/assets/images/paikea.png" alt="paikea_street_poster" />
              </div>
              <h2>PAIKEA</h2>
            </div>
          </div>

          {/* ------ CIDER ------ */}

          <div className='work-box' id='cider'>
              <h2>CIDER</h2>
              <div className='big-content'>
                <img src="src/assets/images/organic_shape.png" alt="cider" />
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
            <div className='yellow-text-box' id='first'>
              <p>Directeur artistique,<br /> graphiste et réalisateur<br /> audiovisuel depuis 2007 avec<br /> un profil créatif, j’ai l’expérience nécessaire pour répondre à vos besoins.
              </p>
            </div>
            <div className='yellow-text-box' id='second'>
              <p>Je crois que la synergie d’une équipe fournit les<br /> meilleurs résultats et que la créativité est sans fin<br /> et ne doit pas se limiter aux ressources.
              </p>
            </div>
            <div className='yellow-text-box' id='third'>
              <p>Croisons nos chemins pour créer<br /> ensemble de belles histoires.
              </p>
            </div>
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

export default App
