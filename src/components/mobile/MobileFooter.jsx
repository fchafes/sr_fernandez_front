import "./MobileFooter.css";

function MobileFooter({ theme }) {
  const footerStyle = {
    backgroundColor: theme === "dark" ? "#000" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
  };
  const footerLinkStyle = {
    color: theme === "dark" ? "#fff" : "#000",
  };
  const footerLogoSrc = () => {
    if (theme === "dark") {
      return "https://wbnzdyxchqficjywllpl.supabase.co/storage/v1/object/public/mi%20primer%20bucket/images/sr-iso-white.svg";
    } else {
      return "https://wbnzdyxchqficjywllpl.supabase.co/storage/v1/object/public/mi%20primer%20bucket/images/sr-iso-01.svg";
    }
  };
  return (
    <>
      <footer className="m-footer" style={footerStyle}>
        <div className="footy">
          <img
            src={footerLogoSrc()}
            alt=""
          />
          <div className="footer-info">
            <h4>DIRECTION ARTISTIQUE</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/fchafes"
                style={footerLinkStyle}
              >
                Site developed by F.CHAFES
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default MobileFooter;
