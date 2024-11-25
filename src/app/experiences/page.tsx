"use client";

import React, { useEffect, useState } from "react";

const ExperiencesPage = () => {
  const [height, setHeight] = useState("100vh");

  useEffect(() => {
    const updateHeight = () => {
      const width = document.documentElement.clientWidth;
      // Calculate height based on 21:37 aspect ratio
      const calculatedHeight = (width * 37) / 21;
      setHeight(`${calculatedHeight}px`);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "auto",
        backgroundColor: "#191919", // Optional: if you want to maintain the dark background
      }}
    >
      <object
        data="/resume.pdf#view=FitH&scrollbar=0&toolbar=0&navpanes=0&statusbar=0"
        type="application/pdf"
        style={{
          width: "100%",
          height: height,
          border: "none",
        }}
      >
        <p>Your browser does not support PDFs.</p>
      </object>
    </div>
  );
};

export default ExperiencesPage;
