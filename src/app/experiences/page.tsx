"use client";

import React, { useEffect, useState } from "react";

const ExperiencesPage = () => {
  const [dimensions, setDimensions] = useState({ width: 800, height: 1410 });

  useEffect(() => {
    const updateDimensions = () => {
      const vw = Math.min(document.documentElement.clientWidth, 800);
      const width = Math.max(vw - 40, 300);
      const height = (width * 37) / 21;
      setDimensions({ width, height });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#191919",
        margin: 0,
        padding: 0,
        width: "100%",
        height: "100vh", // Changed from minHeight to height
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start", // Changed from center to allow scrolling
        overflowY: "auto", // Enable vertical scrolling
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative", // Added to ensure proper scroll behavior
        }}
      >
        <object
          data="/resume.pdf#view=FitH&scrollbar=0&toolbar=0&navpanes=0&statusbar=0"
          type="application/pdf"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        >
          <p>Your browser does not support PDFs.</p>
        </object>
      </div>
    </div>
  );
};

export default ExperiencesPage;
