import "./MobileHome.css";
import { useState } from "react";
import workData from "../../data/workData";

function MobileHome() {
  const [activeTab, setActiveTab] = useState(0);
  const tabToggle = (index) => {
    setActiveTab(index === activeTab ? null : index);
  };
  console.log(workData);

  return (
    <>
      <div className="m-home-container">
        <nav className="mobile-navbar">
          <h1>Sr Fernandez</h1>
          <p>Menu</p>
        </nav>
        <div className="top-media">
          <div className="header-container">
            <img
              src="https://wbnzdyxchqficjywllpl.supabase.co/storage/v1/object/public/mi%20primer%20bucket/images/home/playtime_home.webp"
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
        </div>

        <div className="m-home-footer">footer</div>
      </div>
    </>
  );
}

export default MobileHome;
