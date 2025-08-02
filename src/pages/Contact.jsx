import "./Contact.css";
import NavbarContact from "../components/NavbarContact";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleVisible } from "../redux/cursorReducer";
import MadeIn from "../components/MadeIn";
import MobileNavbar from "../components/mobile/MobileNavbar";

function Contact() {
  let location = useLocation();
  const isMobile = () => {
    return window.innerWidth <= 768;
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showGlitch, setShowGlitch] = useState(false);
  const [showGlitch3, setShowGlitch3] = useState(false);
  const handleGlitch = () => {
    setShowGlitch(true);
    setTimeout(() => {
      setShowGlitch(false);
      navigate("/");
    }, 400);
  };
  const handleAboutGlitch = () => {
    setShowGlitch3(true);
    setTimeout(() => {
      setShowGlitch3(false);
      navigate("/about");
    }, 400);
  };
  useEffect(() => {
    const preloadGlitch_02 = new Image();
    preloadGlitch_02.src = "/assets/gif/glitch_02.gif";
    return () => {};
  }, []);

  return (
    <>
      <NavbarContact handleGlitch={handleGlitch} />
      <MobileNavbar
        location={location}
        handleGlitch={handleGlitch}
        handleAboutGlitch={handleAboutGlitch}
      />
      <MadeIn />
      {showGlitch && (
        <img
          src={
            isMobile()
              ? "/assets/gif/glitch_mobile/glitch_mob_2.gif"
              : "/assets/gif/glitch_02.gif"
          }
          className="glitch"
        />
      )}
      {showGlitch3 && (
        <img
          src={
            isMobile()
              ? "/assets/gif/glitch_mobile/glitch_mob_3.gif"
              : "/assets/gif/glitch_01.gif"
          }
          className="glitch"
        />
      )}

      <div className="contact-page-container">
        <div className="contact-box">
          <div className="link-box">
            <a
              href="mailto:camilofndz@gmail.com"
              onMouseEnter={() => dispatch(toggleVisible())}
              onMouseLeave={() => dispatch(toggleVisible())}
            >
              camilofndz@gmail.com
            </a>
          </div>
          <div className="link-box">
            <a
              href="tel:+33644006666"
              onMouseEnter={() => dispatch(toggleVisible())}
              onMouseLeave={() => dispatch(toggleVisible())}
            >
              + 33 6 44 00 66 66
            </a>
          </div>
          <div className="link-box bottomless">
            <a
              href="https://vimeo.com/user22695304"
              target="_blank"
              onMouseEnter={() => dispatch(toggleVisible())}
              onMouseLeave={() => dispatch(toggleVisible())}
            >
              vimeo
            </a>
          </div>
          <div className="link-box bottomless">
            <img
              src="/assets/images/contact_smile.png"
              alt="smiley_face"
              className="contact-smile"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
