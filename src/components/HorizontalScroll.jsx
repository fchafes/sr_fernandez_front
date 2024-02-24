import { useRef } from "react";
import './HorizontalScroll.css';

function HorizontalScroll({ children }) {
  const contentRef = useRef(null);

  const handleWheel = (event) => {
    if (event.deltaY !== 0) {
      event.preventDefault();
      contentRef.current.scrollLeft += event.deltaY;
    }
  };

  return (
    <div
      ref={contentRef}
      className="horizontal-scroll-container"
      onWheel={handleWheel}
    >
      {children}
    </div>
  );
}

export default HorizontalScroll;
