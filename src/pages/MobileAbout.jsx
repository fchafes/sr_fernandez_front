import "./MobileAbout.css";
import MobileNavbar from "../components/mobile/MobileNavbar";
import StickyNote from "../components/StickyNote";
import stickyNotesData from "../data/stickyNotesData";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function MobileAbout() {
  let location = useLocation();
  const navigate = useNavigate();
  const stickyText = stickyNotesData;
  const [showGlitch, setShowGlitch] = useState(false);
  const [showGlitch2, setShowGlitch2] = useState(false);
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

  return (
    <>
      {showGlitch && (
        <img
          src="/assets/gif/glitch_mobile/glitch_mob_3.gif"
          className="glitch"
        />
      )}
      {showGlitch2 && (
        <img
          src="/assets/gif/glitch_mobile/glitch_mob_1.gif"
          className="glitch"
        />
      )}
      <MobileNavbar
        location={location}
        handleGlitch={handleGlitch}
        handleContactGlitch={handleContactGlitch}
      />
      <div className="m-about-container">
        <div className="m-big-about">
          <h4>A</h4>
          <h4>B</h4>
          <h4>O</h4>
          <h4>O</h4>
          <h4>O</h4>
          <h4>U</h4>
          <h4>T</h4>
          <h4>!</h4>
        </div>
        <div className="m-big-about-1000">
          <h4>A</h4>
          <h4>B</h4>
          <h4>O</h4>
          <h4>O</h4>
          <h4>O</h4>
          <h4>U</h4>
          <h4>T</h4>
          <h4>!</h4>
          <img
            src="/assets/images/sticker.png"
            alt=""
            className="about-sticker-round"
          />
          <img
            src="/assets/images/yellow_tape.png"
            alt=""
            className="about-sticker-tape"
          />
          <StickyNote
            startPoint="first-mobile"
            endPoint="visible-1-mobile"
            data={stickyText[0].text}
          />
          <StickyNote
            startPoint="second-mobile"
            endPoint="visible-2-mobile"
            data={stickyText[1].text}
          />
          <StickyNote
            startPoint="third-mobile"
            endPoint="visible-3-mobile"
            data={stickyText[2].text}
          />
        </div>
        <div className="m-big-about-behind">
          <h4>A</h4>
          <h4>B</h4>
          <img src="/assets/gif/about.gif" alt="" />
        </div>
        <div className="m-big-about-behind">
          <h4>A</h4>
          <h4>B</h4>
          <h4>O</h4>
          <h4>O</h4>
          <img src="/assets/gif/about_2.gif" alt="" />
        </div>
      </div>
    </>
  );
}

export default MobileAbout;
