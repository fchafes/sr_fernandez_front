import "./Contact.css";
import NavbarContact from "../components/NavbarContact";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleVisible } from "../redux/cursorReducer";
import MadeIn from "../components/MadeIn";
import MobileNavbar from "../components/mobile/MobileNavbar";

function Contact() {
  const dispatch = useDispatch();
  const bucket =
    "https://wbnzdyxchqficjywllpl.supabase.co/storage/v1/object/public/mi%20primer%20bucket";
  const navigate = useNavigate();
  const [showGlitch, setShowGlitch] = useState(false);
  const [showGlitch2, setShowGlitch2] = useState(false);
  const [showGlitch3, setShowGlitch3] = useState(false);
  const handleGlitch = () => {
    setShowGlitch(true);
    setTimeout(() => {
      setShowGlitch(false);
      navigate("/");
    }, 400);
  };
  const handleContactGlitch = () => {
    setShowGlitch2(true);
    setTimeout(() => {
      setShowGlitch2(false);
      navigate("/contact");
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
    preloadGlitch_02.src = `${bucket}/gif/glitch_02.gif`;
    return () => {};
  }, []);

  return (
    <>
      <NavbarContact handleGlitch={handleGlitch} />
      <MobileNavbar
        handleGlitch={handleGlitch}
        handleContactGlitch={handleContactGlitch}
        handleAboutGlitch={handleAboutGlitch}
      />
      <MadeIn />
      {showGlitch && (
        <img src={`${bucket}/gif/glitch_02.gif`} className="glitch" />
      )}
      {showGlitch2 && (
        <img src={`${bucket}/gif/glitch_04.gif`} className="glitch" />
      )}
      {showGlitch3 && (
        <img src={`${bucket}/gif/glitch_01.gif`} className="glitch" />
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
              src={`${bucket}/images/contact_smile.png`}
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
