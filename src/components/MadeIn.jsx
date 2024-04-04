import "./MadeIn.css";
import { useDispatch } from "react-redux";
import { toggleVisible } from "../redux/cursorReducer";

function MadeIn() {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="sticky-credits"
        onMouseEnter={() => dispatch(toggleVisible())}
        onMouseLeave={() => dispatch(toggleVisible())}
      >
        <a
          href="http://linkedin.com/in/fchafes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site Developed by F.Chafes
        </a>
      </div>
    </>
  );
}

export default MadeIn;
