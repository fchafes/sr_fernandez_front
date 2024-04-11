import "./MobileHome.css";
import { useState } from "react";
import workData from "../../data/workData";
import MobileNavbar from "./MobileNavbar";

function MobileHome() {
  const [activeTab, setActiveTab] = useState(null);
  const tabToggle = (index) => {
    setActiveTab(index === activeTab ? null : index);
  };
  const activeIndex = workData.indexOf(activeTab);

  return (
    <>
      <MobileNavbar />
      <div className="m-home-container">
        <div className="top-media">
          <div className="header-container">
            <img
              src={activeTab === null ? workData[0].images[0] : workData[activeIndex].images[0] }
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
                          activeTab === index ? "yellow" : ""
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
          <div className="m-home-footer">
            
            <div className="footy"></div>


          </div>
        </div>
      </div>
    </>
  );
}

export default MobileHome;
