// src/App.tsx
import React, { useState, useEffect } from "react";
import VideoPlayer from "./components/VideoPlayer";
import "./styles/App.css";

const App: React.FC = () => {
  const [originalVideoSrc, setOriginalVideoSrc] = useState<string | null>(null);
  const [processedVideoSrc, setProcessedVideoSrc] = useState<string | null>(
    null
  );
  const [progress, setProgress] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleVideoUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        setIsProcessing(true);
        const response = await fetch("http://localhost:5000/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          const originalVideoUrl = URL.createObjectURL(file);
          const processedVideoUrl = `http://localhost:5000/processed/${data.path}`;
          setOriginalVideoSrc(originalVideoUrl);
          setProcessedVideoSrc(processedVideoUrl);
          // Debugging: Log URLs
          console.log("Original Video URL:", originalVideoUrl);
          console.log("Processed Video URL:", processedVideoUrl);
        } else {
          console.error("Failed to upload and process video");
        }
      } catch (error) {
        console.error("Error uploading video:", error);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  useEffect(() => {
    if (isProcessing) {
      const interval = setInterval(async () => {
        try {
          const response = await fetch("http://localhost:5000/progress");
          const data = await response.json();
          setProgress(data.progress);
        } catch (error) {
          console.error("Error fetching progress:", error);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isProcessing]);

  return (
    <div className="App">
      <div className="content">
        <div className="text-section">
          <h1>Welcome to Video Clipper</h1>
          <p>Try playing a video!</p>
          <input
            type="file"
            accept="video/*"
            id="videoUpload"
            style={{ display: "none" }}
            onChange={handleVideoUpload}
          />
          <button
            className="upload-button"
            onClick={() => document.getElementById("videoUpload")?.click()}
          >
            Add Video
          </button>
        </div>
        <div className="video-section">
          {isProcessing ? (
            <div>
              <p>Processing video: {progress.toFixed(2)}%</p>
              <progress value={progress} max="100"></progress>
            </div>
          ) : (
            <VideoPlayer
              originalVideoSrc={originalVideoSrc}
              processedVideoSrc={processedVideoSrc}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
