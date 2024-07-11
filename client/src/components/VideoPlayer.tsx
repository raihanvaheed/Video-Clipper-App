// src/components/VideoPlayer.tsx
import React from "react";

interface VideoPlayerProps {
  videoSrc: string | null;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
  return (
    <div>
      {videoSrc && (
        <div>
          <h3>Original Video:</h3>
          <video controls width="600" src={videoSrc}>
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <div>
        <h3>Processed Video:</h3>
        <p>The processed video is saved in the "processed" folder.</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
