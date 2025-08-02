import "./CustomCursor.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isPointer = useSelector((state) => state.cursor.pointer);
  const isVisible = useSelector((state) => state.cursor.visible);
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  const cursorSize = isPointer ? 90 : 30;
  const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`smiley-cursor ${isPointer ? "pointer" : ""}`}
      style={{
        ...cursorStyle,
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
        display: `${isVisible ? "block" : "none"}`,
      }}
    >
      <div
        className={`inner-face ${isPointer ? "shown" : ""}`}
        style={{
          backgroundImage: `url("/assets/images/contact_smile.png")`,
        }}
      ></div>
    </div>
  );
};
