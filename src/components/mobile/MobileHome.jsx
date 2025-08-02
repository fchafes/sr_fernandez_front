import "./MobileHome.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import workData from "../../data/workData";
import MobileHomeNavbar from "./MobileHomeNavbar";
import MobileFooter from "./MobileFooter";

function MobileHome() {
  let location = useLocation();
  const navigate = useNavigate();
  const isMobile = () => {
    return window.innerWidth <= 768;
  };

  const [activeTab, setActiveTab] = useState(null);
  const [showGlitch2, setShowGlitch2] = useState(false);
  const [showGlitch3, setShowGlitch3] = useState(false);

  const activeIndex = workData.indexOf(activeTab);
  const tabToggle = (index) => {
    if (index === activeTab) {
      navigate(`/${workData[activeIndex].url}`);
    }
    setActiveTab(index === activeTab ? null : index);
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

  return (
    <>
      {showGlitch2 && (
        <img
          src={
            isMobile()
              ? "/assets/gif/glitch_mobile/glitch_mob_3.gif"
              : "/assets/gif/glitch_03.gif"
          }
          className="glitch"
        />
      )}
      {showGlitch3 && (
        <img
          src={
            isMobile()
              ? "/assets/gif/glitch_mobile/glitch_mob_1.gif"
              : "/assets/gif/glitch_01.gif"
          }
          className="glitch"
        />
      )}
      <MobileHomeNavbar
        location={location}
        handleContactGlitch={handleContactGlitch}
        handleAboutGlitch={handleAboutGlitch}
      />
      <div className="m-home-container">
        <div className="top-media">
          <div className="header-container">
            <img
              src={
                activeTab === null
                  ? "/assets/gif/m_home_header.gif"
                  : workData[activeIndex].images_mobile[0]
              }
              alt=""
            />
          </div>
        </div>
        <div className="bottom-media">
          <div className="accordion">
            {workData.map((index) => {
              return (
                <div
                  key={index}
                  className="tab-container"
                  style={{ height: `${activeTab === index ? "70px" : ""}` }}
                  onClick={() => tabToggle(index)}
                >
                  <div className="tab">
                    <div className="tab-left">
                      <img src={index.img_mini} alt="" />
                    </div>
                    <div
                      className="tab-right"
                      style={{
                        backgroundColor: `${
                          activeTab === index ? "#efff55" : ""
                        }`,
                      }}
                    >
                      <h3>{index.title}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <MobileFooter />
        </div>
      </div>
    </>
  );
}

export default MobileHome;
