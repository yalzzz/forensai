import React, { useState } from 'react';

const UploadForm = ({ onFileSelect }) => {
  const [selected, setSelected] = useState(null);
  const [fileType, setFileType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected) {
      onFileSelect(selected);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelected(file);
      setFileType(file.type.split('/')[0]); // Extract 'image' or 'video'
    }
  };

  return (
    <section className="mb-5">
      <h3>Upload Visual Evidence</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="file"
            className="form-control"
            accept="image/*,video/*"  // Accept both images and videos
            onChange={handleFileChange}
          />
        </div>
        <div>
          {selected && (
            <p>Selected {fileType}: {selected.name}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary" disabled={!selected}>
          Analyze
        </button>
      </form>
    </section>
  );
};

export default UploadForm;
