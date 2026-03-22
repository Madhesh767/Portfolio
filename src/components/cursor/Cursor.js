import React, { useEffect, useState, useRef } from "react";
import "./Cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const requestRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.tech-card') || 
        target.closest('.project-card') || 
        target.closest('.exp-card');
      
      setIsHovering(!!isInteractive);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.body.classList.add("cursor-none");

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.body.classList.remove("cursor-none");
    };
  }, []);

  const animateCursor = () => {
    setRingPosition((prev) => ({
      x: prev.x + (position.x - prev.x) * 0.12,
      y: prev.y + (position.y - prev.y) * 0.12,
    }));
    requestRef.current = requestAnimationFrame(animateCursor);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateCursor);
    return () => cancelAnimationFrame(requestRef.current);
  }, [position]);

  return (
    <>
      <div
        className={`cursor ${isHovering ? "hovering" : ""}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`cursor-ring ${isHovering ? "hovering" : ""}`}
        style={{ left: `${ringPosition.x}px`, top: `${ringPosition.y}px` }}
      />
    </>
  );
};

export default Cursor;
