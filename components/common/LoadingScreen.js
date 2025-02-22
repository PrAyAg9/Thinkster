/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from "react";

const BuildingLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If the document is already loaded, disable loading immediately.
    if (document.readyState === "complete") {
      setLoading(false);
      return;
    }
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!loading) return null;

  // Display 5 building blocks
  const columns = 5;
  return (
    <div className="loading-overlay">
      <div className="building-container">
        {Array.from({ length: columns }).map((_, index) => (
          <div
            key={index}
            className="block"
            style={{ animationDelay: `${index * 0.2}s` }}
          ></div>
        ))}
      </div>
      <style jsx>{`
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }
        .building-container {
          display: flex;
          gap: 10px;
          align-items: flex-end;
        }
        .block {
          width: 40px;
          height: 0;
          background-color: #3d6ce7;
          /* The animation creates a building-like effect */
          animation: build 1.5s ease-in-out infinite;
        }
        @keyframes build {
          0% {
            height: 0;
            opacity: 0;
          }
          20% {
            height: 100px;
            opacity: 1;
          }
          40% {
            height: 100px;
            opacity: 1;
          }
          60% {
            height: 0;
            opacity: 0;
          }
          100% {
            height: 0;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default BuildingLoader;
