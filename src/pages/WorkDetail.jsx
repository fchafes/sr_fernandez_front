import "./WorkDetail.css";
import NavbarDetail from "../components/NavbarDetail";
import workData from "../data/workData";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleVisible } from "../redux/cursorReducer";
import MobileNavbar from "../components/mobile/MobileNavbar";
import MobileFooter from "../components/mobile/MobileFooter";

function WorkDetail() {
  let location = useLocation();
  const isMobile = () => {
    return window.innerWidth <= 768;
  };
  const dispatch = useDispatch();
  const { url } = useParams();
  const work = workData.find((work) => work.url === url);
  const paragraphs = Object.values(work.description);
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
  const handleGlitch2 = () => {
    setShowGlitch2(true);
    setTimeout(() => {
      setShowGlitch2(false);
      navigate("/");
    }, 400);
  };
  const handleContactGlitch = () => {
    setShowGlitch3(true);
    setTimeout(() => {
      setShowGlitch3(false);
      navigate("/contact");
    }, 400);
  };
  const handleAboutGlitch = () => {
    setShowGlitch2(true);
    setTimeout(() => {
      setShowGlitch2(false);
      navigate("/about");
    }, 400);
  };

  useEffect(() => {
    const preloadGlitch_03 = new Image();
    preloadGlitch_03.src = "/assets/gif/glitch_03.gif";
    const preloadGlitch_04 = new Image();
    preloadGlitch_04.src = "/assets/gif/glitch_04.gif";
    return () => {};
  }, []);

  return (
    <>
      <NavbarDetail
        handleGlitch={handleGlitch}
        handleContactGlitch={handleContactGlitch}
      />
      <MobileNavbar
        location={location}
        handleGlitch={handleGlitch}
        handleContactGlitch={handleContactGlitch}
        handleAboutGlitch={handleAboutGlitch}
      />
      {showGlitch && (
        <img
          src={
            isMobile()
              ? "/assets/gif/glitch_mobile/glitch_mob_1.gif"
              : "/assets/gif/glitch_mobile/glitch_mob_3.gif"
          }
          className="glitch"
        />
      )}
      {showGlitch2 && (
        <img
          src={
            isMobile()
              ? "/assets/gif/glitch_mobile/glitch_mob_2.gif"
              : "/assets/gif/glitch_04.gif"
          }
          className="glitch"
        />
      )}
      {showGlitch3 && (
        <img
          src={
            isMobile()
              ? "/assets/gif/glitch_mobile/glitch_mob_3.gif"
              : "/assets/gif/glitch_02.gif"
          }
          className="glitch"
        />
      )}

      <div className="work-container">
        <div className="text-container">
          <Link
            to="#"
            onClick={handleGlitch2}
            onMouseEnter={() => dispatch(toggleVisible())}
            onMouseLeave={() => dispatch(toggleVisible())}
          >
            Sr. Fernandez
          </Link>
          <h1>{work.title}</h1>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="img-container">
          {isMobile()
            ? work.images_mobile.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  loading="lazy"
                />
              ))
            : work.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  loading="lazy"
                />
              ))}
        </div>
      </div>
      <MobileFooter theme="dark" />
    </>
  );
}

export default WorkDetail;
