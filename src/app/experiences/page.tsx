"use client";

import React from "react";

const ExperiencesPage = () => {
  return (
    <object
      data="/resume.pdf#view=FitH&scrollbar=0&toolbar=0&navpanes=0&statusbar=0"
      type="application/pdf"
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
      }}
    >
      <p>Your browser does not support PDFs.</p>
    </object>
  );
};

export default ExperiencesPage;
