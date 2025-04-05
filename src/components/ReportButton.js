import React from "react";

const ReportButton = () => {
  const handleDownload = () => {
    // This would trigger backend PDF download (not implemented here)
    alert("PDF download triggered");
  };

  return (
    <section className="text-center">
      <button className="btn btn-success" onClick={handleDownload}>
        📄 Download Report
      </button>
    </section>
  );
};

export default ReportButton;
