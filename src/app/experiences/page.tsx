import React from "react";

const ExperiencesPage = () => {
  return (
    <div
      style={{
        backgroundColor: "#191919",
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          minWidth: "300px",
          margin: "20px",
          position: "relative",
          paddingTop: "176.19%", // Maintains 21:37 aspect ratio (37/21 * 100)
        }}
      >
        <object
          data="/resume.pdf#view=FitH&scrollbar=0&toolbar=0&navpanes=0&statusbar=0"
          type="application/pdf"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
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
