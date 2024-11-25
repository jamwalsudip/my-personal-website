import React from "react";

const ExperiencesPage = () => {
  return (
    <div
      style={{
        backgroundColor: "#191919",
        margin: 0,
        padding: 0,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <object
        data="/resume.pdf#view=FitH&scrollbar=0&toolbar=0&navpanes=0&statusbar=0"
        type="application/pdf"
        style={{
          width: "100%",
          maxWidth: "1200px",
          minWidth: "300px",
          height: "100%",
          border: "none",
        }}
      >
        <p>Your browser does not support PDFs.</p>
      </object>
    </div>
  );
};

export default ExperiencesPage;
