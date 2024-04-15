import "./MobileHome.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import workData from "../../data/workData";
import MobileNavbar from "./MobileNavbar";
import MobileFooter from "./MobileFooter";

function MobileHome() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(null);
  const [showGlitch, setShowGlitch] = useState(false);
  const [showGlitch2, setShowGlitch2] = useState(false);
  const tabToggle = (index) => {
    if (index === activeTab) {
      navigate(`/${workData[activeIndex].url}`);
    }
    setActiveTab(index === activeTab ? null : index);
  };
  const activeIndex = workData.indexOf(activeTab);
  const bucket =
    "https://wbnzdyxchqficjywllpl.supabase.co/storage/v1/object/public/mi%20primer%20bucket";
  const handleGlitch = () => {
    setShowGlitch(true);
    setTimeout(() => {
      setShowGlitch(false);
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

  return (
    <>
    {showGlitch && (
        <img src={`${bucket}/gif/glitch_03.gif`} className="glitch" />
      )}
      {showGlitch2 && (
        <img src={`${bucket}/gif/glitch_04.gif`} className="glitch" />
      )}
      <MobileNavbar
        handleGlitch={handleGlitch}
        handleContactGlitch={handleContactGlitch}
      />
      <div className="m-home-container">
        <div className="top-media">
          <div className="header-container">
            <img
              src={
                activeTab === null
                  ? workData[0].images[0]
                  : workData[activeIndex].images[0]
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
                      <img src={index.images[0]} alt="" />
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
