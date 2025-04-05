import React, { useState } from "react";
import UploadForm from "./components/UploadForm";
import ReportButton from "./components/ReportButton";
import ResultPanel from "./components/ResultPanel";
import './App.css';
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState({
    deepfake: null,
    reconstruction: null,
    metadata: null
  });

  const handleFileUpload = async (selectedFile) => {
    setFile(selectedFile);

    // Create a FormData object to send the file to the backend
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      // Send the image file to the backend via POST request
      const response = await axios.post("http://localhost:8000/upload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Ensure the correct header is set
        },
      });

      // Assuming the backend returns the following data:
      setResults({
        deepfake: response.data.deepfake || "Real",  // Mocked value for now
        reconstruction: response.data.reconstruction || "/path/to/reconstructed.jpg",  // Mocked path for now
        metadata: response.data.metadata || {
          format: "JPEG",
          resolution: "1024x768",
          camera: "Canon EOS 80D"
        }
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      // Handle the error properly if needed
    }
  };

  return (
    <div className="container py-4">
      <header className="mb-4 text-center">
        <h1 className="display-5 fw-bold">🔍 ForensAI - Visual Forensics</h1>
        <p className="lead text-muted">GenAI-powered Postmortem Forensics Tool</p>
      </header>

      <div className="glass">
        {/* Pass the handleFileUpload function to UploadForm */}
        <UploadForm onFileSelect={handleFileUpload} />
      </div>
      
      <div className="glass">
        {/* Display results in ResultPanel */}
        <ResultPanel results={results} />
      </div>

      <div className="glass">
        <ReportButton />
      </div>
    </div>
  );
}

export default App;
