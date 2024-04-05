import "./MobileHome.css";

function MobileHome() {
  return (
    <>
      <div className="m-home-container">
        <div className="top-media"></div>
        <div className="bottom-media">
          <div className="accordion">
            <div className="tab">
              <div className="tab-left">
                <img src="src/assets/mini.jpg" alt="" />
              </div>
              <div className="tab-right">
                <h3>ZONZA</h3>
              </div>
            </div>
          </div>
          <div className="m-home-footer">footer</div>
        </div>
      </div>
    </>
  );
}

export default MobileHome;
