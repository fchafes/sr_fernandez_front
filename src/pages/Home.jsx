import './Home.css'
import Marquee from "react-fast-marquee";
import HorizontalScroll from '../components/HorizontalScroll';
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import StickyNote from '../components/StickyNote';
import stickyNotesData from '../data/stickyNotesData';
import MadeIn from '../components/MadeIn';

function Home() {
  const bucket = "https://wbnzdyxchqficjywllpl.supabase.co/storage/v1/object/public/mi%20primer%20bucket";
  const stickyText = stickyNotesData;
  const navigate = useNavigate();
  const [showGlitch, setShowGlitch] = useState(false);
  const handleGlitch = () => {
    setShowGlitch(true);
    setTimeout(() => {
      setShowGlitch(false);
      navigate('/contact');
    }, 400);
  };
  const scrollToLeftRef = useRef(null);
  const scrollToLeft = () => {
    if (scrollToLeftRef.current) {
      scrollToLeftRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAboutRef = useRef(null);
  const scrollToAbout = () => {
    if (scrollToAboutRef.current) {
      scrollToAboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContactRef = useRef(null);
  const scrollToContact = () => {
    if (scrollToContactRef.current) {
      scrollToContactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

    useEffect(() => {
      const preloadGlitch_01 = new Image();
      preloadGlitch_01.src = `${bucket}/gif/glitch_01.gif`;
      return () => {};
    }, []);
  
  return (
    <>
      <HorizontalScroll>
      <Navbar
      scrollToLeft={scrollToLeft}
      scrollToAbout={scrollToAbout}
      handleGlitch={handleGlitch}
      />
      <MadeIn/>
      {showGlitch && (
        <img src={`${bucket}/gif/glitch_01.gif`} className='glitch'/>
      )}

      {/* ---- HOME CONTAINER ---- */}
      <div className='home-container' ref={scrollToLeftRef}>
        
        {/* ------ WORKS CONTAINER ------ */}
        <div className='works-container'>

          {/* ---- LOGO, TITLE AND SUB ---- */}
          <div className='work-box'>
            <div className='title-and-sub'>
              <h2>Sr. Fernandez</h2>
              <img src={`${bucket}/images/yellow_star.png`} alt="decorative_yellow_star" />
              <h1>DIRECTION<br />ARTISTIQUE</h1>
              <h3>BRANDING / GRAPHISME / PHOTOGRAPHIE /<br/> MOTION DESIGN / ILLUSTRATION / SCENOGRAPHIE</h3>
            </div>
          </div>
          
          {/* ------ PETIT BALLON ------ */}
          <div className='work-box' id='petit-ballon'>
            <Link to="/lpb-box-premium">
              <div className='big-content'>
                <img src={`${bucket}/gif/petit_ballon.gif`} alt="petit_ballon_gif" />
                <h2>LE PETIT BALLON</h2>
              </div>
            </Link>
            <div className='message-box'>
              <p>CRÉATIVITÉ ANTICONFORMISTE<br /> AU SERVICE DES IDÉES</p>
              <img src={`${bucket}/images/smile.png`} alt="smiley_face" className='smile-img'/>
            </div>
          </div>
          
          {/* ------ PETIT BALLON 2 ------ */}
          <div className='work-box' id='petit-ballon-2'>
            <Link to="/lpb-foire-aux-vin">
              <div className='big-content'>
                <img src={`${bucket}/images/main_petit_ballon.jpg`} alt="photo_set_bottles" />
                <div className='arrow_wine_box'>
                  <img src={`${bucket}/images/arrow.png`} alt="arrow_pointing_wine"/>
                  <p>C'EST PAS LA FOIRE À LA SAUCISSE,<br /> C'EST LA FOIRE AUX VINS,<br /> CLIQUEZ ICI</p>
                </div>
              </div>
            </Link>
          </div>
          
          {/* ------ AA ------ */}
          <div className='work-box' id='aa'>
          <div className='extra-content'>
              <img src={`${bucket}/images/bottle_petit_ballon_low.png`} alt="wine_bottle" className='wine_bottle'/>
            </div>
            <Link to="/aa">
              <img src={`${bucket}/images/Aa_home.png`} alt="aa-img" className='aa_square'/>
            </Link>
            <Marquee className='marquee'>Sr. Fernandez - Sr. Fernandez - Sr. Fernandez -&nbsp;</Marquee>
            <div className='blue_square'></div>
            {/* <Marquee className='marquee'>Sr. Fernandez - Sr. Fernandez - Sr. Fernandez -&nbsp;</Marquee> */}
          </div>
          
          {/* ------ PLAYTIME PARIS ------ */}
          <div className='work-box' id='playtime-paris'>
            <Link to="/playtime-paris-ny">
            <div className='big-content'>
              <img src={`${bucket}/images/stars_whale.png`} alt="decorative-stars" className='stars-img'/>
              <img src={`${bucket}/gif/whale.gif`} alt="whale" className='whale-img'/>
              <img src={`${bucket}/images/playtime_home.png`} alt="playtime_paris_poster" />
              <h2>PLAYTIME PARIS - NY</h2>
            </div>
            </Link>
          </div>

          {/* ------ ZONZA ------ */}
          <div className='work-box' id='zonza'>
            <Link to="/zonza">
              <h2>ZONZA!</h2>
            </Link>
            <img src={`${bucket}/images/stars_whale.png`} alt="decorative-stars" className='zonza-stars'/>
            <div className='big-content'>
              <Link to="/zonza">
                <img src={`${bucket}/images/zonza.jpg`} alt="zonza_bottles" />
              </Link>
            </div>
          </div>
          
          {/* ------ OMY EXTRA ------ */}
          <div className='work-box' id='omy-extra'>
            <div className='message-box'>
              <p>cliquez ici pour<br />rencontrer<br />mes potes</p>
              <img src={`${bucket}/images/arrow.png`} alt="arroy" className='arrow-img'/>
            </div>
            <div className='big-content'>
            <Link to="/omy-3d">
              <img src={`${bucket}/images/tiger.png`} alt="tiger" />
            </Link>
            </div>
            <img src={`${bucket}/images/yellow_tape.png`} alt="" className='tape-img'/>
          </div>

          {/* ------ OMY MAIN ------ */}
          <div className='work-box' id='omy-main'>
            <Link to="/omy-stick-it">
              <h2>OMY</h2>
            </Link>
            <div className='big-content'>
              <Link to="/omy-stick-it">
                <img src={`${bucket}/images/omy_pack.png`} alt="omy_packaging" />
              </Link>
              <img src={`${bucket}/images/stars_whale.png`} alt="decorative-stars" className='omy-stars'/>
            </div>
          </div>
          
          {/* ------ KIEHL'S ------ */}
          <div className='work-box' id='kiehls'>
            <div className='align-box'>
              <h2>KIEHL'S</h2>
              <div className='big-content'>
                <img src={`${bucket}/gif/kiehls.gif`} alt="kiehls_product" />
              </div>
            </div>
          </div>

          {/* ------ PAIKEA ------ */}
          <div className='work-box' id='paikea'>
            <div className='align-box'>
              <div className='big-content'>
                <Link to="/paikea">
                  <img src={`${bucket}/images/paikea.png`} alt="paikea_street_poster" />
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
                <img src={`${bucket}/images/organic_shape.png`} alt="cider" />
              </Link>
            </div>
          </div>
        </div>


        {/* ------ ABOUT CONTAINER ------ */}
        <div className='about-container'>
          <div className='big-about'>
            <h3 ref={scrollToAboutRef}>ABOOOUT!&nbsp;</h3>
          </div>
          <div className='big-about behind'>
            <h3>AB</h3>
            <img src={`${bucket}/gif/about.gif`} alt="" />
          </div>
          <div className='big-about behind'>
            <h3>ABOO</h3>
            <img src={`${bucket}/gif/about_2.gif`} alt="" />
          </div>
          <div className='sticker-container'>
          <div className='sticker-container-relative'>
            <img src={`${bucket}/images/sticker.png`} alt="" id='sticker'/>
            <img src={`${bucket}/images/yellow_tape.png`} alt="" className='yellow_tape' id='first'/>
            <StickyNote startPoint="first" endPoint="visible-1" data={stickyText[0].text} />
            <StickyNote startPoint="second" endPoint="visible-2" data={stickyText[1].text} />
            <StickyNote startPoint="third" endPoint="visible-3" data={stickyText[2].text} />
          </div>
          </div>
          <div className='contact-container'>
            <div className='big-contact'>
            <div className='contact-button'><Link to='#' onClick={handleGlitch}>
              CONTACT!
            </Link></div>
            <img src='src/assets/estrellas.gif' alt="decorative_stars" id='stars'/>
            <img src={`${bucket}/images/big_iso.png`} alt="elephant_logo" id='big-iso'/>
            <div className='contact-message'>
              <img src={`${bucket}/images/big_smile.png`} alt="smiley_face"/>
              <h4>Nous sommes faits pour<br /> travailler ensemble.</h4>
            </div>
            </div>
          </div>
        </div>
        
      </div>
      </HorizontalScroll>
    </>
  )
}

export default Home;
