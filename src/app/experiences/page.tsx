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
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          width: "595px", // This is equivalent to 21cm in pixels
          height: "1048px", // This is equivalent to 37cm in pixels
          maxWidth: "90vw",
          maxHeight: "90vh",
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
