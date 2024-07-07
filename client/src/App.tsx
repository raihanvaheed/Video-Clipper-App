// src/App.tsx
import React, { useState } from 'react';
import VideoPlayer from './components/VideoPlayer';
import './styles/App.css';

const App: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideoSrc(videoURL);
    }
  };

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
            style={{ display: 'none' }}
            onChange={handleVideoUpload}
          />
          <button
            className="upload-button"
            onClick={() => document.getElementById('videoUpload')?.click()}
          >
            Add Video
          </button>
        </div>
        <div className="video-section">
          {videoSrc ? (
            <VideoPlayer videoSrc={videoSrc} />
          ) : (
            <p>Please select a video to play.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
