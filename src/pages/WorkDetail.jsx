import "./WorkDetail.css";
import NavbarDetail from "../components/NavbarDetail";
import workData from "../data/workData";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleVisible } from "../redux/cursorReducer";
import MobileNavbar from "../components/mobile/MobileNavbar";

function WorkDetail() {
  const dispatch = useDispatch();
  const bucket =
    "https://wbnzdyxchqficjywllpl.supabase.co/storage/v1/object/public/mi%20primer%20bucket";
  const { url } = useParams();
  const work = workData.find((work) => work.url === url);
  const paragraphs = Object.values(work.description);
  const navigate = useNavigate();
  const [showGlitch, setShowGlitch] = useState(false);
  const [showGlitch2, setShowGlitch2] = useState(false);
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
    setShowGlitch(true);
    setTimeout(() => {
      setShowGlitch(false);
      navigate("/contact");
    }, 400);
  };

  useEffect(() => {
    const preloadGlitch_03 = new Image();
    preloadGlitch_03.src = `${bucket}/gif/glitch_03.gif`;
    const preloadGlitch_04 = new Image();
    preloadGlitch_04.src = `${bucket}/gif/glitch_04.gif`;
    return () => {};
  }, []);

  return (
    <>
      <NavbarDetail
        handleGlitch={handleGlitch}
        handleContactGlitch={handleContactGlitch}
      />
      <MobileNavbar
        handleGlitch={handleGlitch}
        handleContactGlitch={handleContactGlitch}
      />
      {showGlitch && (
        <img src={`${bucket}/gif/glitch_03.gif`} className="glitch" />
      )}
      {showGlitch2 && (
        <img src={`${bucket}/gif/glitch_04.gif`} className="glitch" />
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
          {work.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default WorkDetail;
