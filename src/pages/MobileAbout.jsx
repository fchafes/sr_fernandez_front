import "./MobileAbout.css";
import MobileNavbar from "../components/mobile/MobileNavbar";

function MobileAbout() {
  const bucket =
    "https://wbnzdyxchqficjywllpl.supabase.co/storage/v1/object/public/mi%20primer%20bucket";
  return (
    <>
      <MobileNavbar />
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
        <div className="m-big-about-behind">
          <h4>A</h4>
          <h4>B</h4>
          <img src={`${bucket}/gif/about.gif`} alt="" />
        </div>
        <div className="m-big-about-behind">
          <h4>A</h4>
          <h4>B</h4>
          <h4>O</h4>
          <h4>O</h4>
          <img src={`${bucket}/gif/about_2.gif`} alt="" />
        </div>
      </div>
    </>
  );
}

export default MobileAbout;
