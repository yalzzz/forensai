import React from "react";

const ResultPanel = ({ results }) => {
  // Fallback image URL
  const placeholderImage = "https://via.placeholder.com/250?text=No+Preview";

  // Check if the reconstruction image URL is valid
  const getReconstructionImage = (imageUrl) => {
    // If the reconstruction image URL is invalid or empty, return the placeholder image
    return imageUrl && imageUrl !== "null" ? imageUrl : placeholderImage;
  };

  return (
    <section className="mb-5">
      <h3>Results</h3>
      <div className="row">
        <div className="col-md-4">
          <div className="card p-3 mb-3">
            <h5>Deepfake Detection</h5>
            <p>Status: <strong>{results.deepfake || "Pending"}</strong></p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 mb-3">
            <h5>Facial Reconstruction</h5>
            <img
              src={getReconstructionImage(results.reconstruction)}  // Use placeholder if no image is available
              alt={results.reconstruction ? "Reconstructed" : "No Preview Available"}
              className="img-fluid"
              style={{ maxHeight: "250px", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 mb-3">
            <h5>Metadata Analysis</h5>
            {results.metadata ? (
              <ul className="list-unstyled">
                <li><strong>Format:</strong> {results.metadata.format}</li>
                <li><strong>Resolution:</strong> {results.metadata.resolution}</li>
                <li><strong>Camera:</strong> {results.metadata.camera}</li>
              </ul>
            ) : (
              <p>Details will appear here</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultPanel;
