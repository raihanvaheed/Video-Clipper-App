// src/components/VideoPlayer.tsx
import React from "react";

interface VideoPlayerProps {
  originalVideoSrc: string | null;
  processedVideoSrc: string | null;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  originalVideoSrc,
  processedVideoSrc,
}) => {
  return (
    <div>
      {originalVideoSrc && (
        <div>
          <h3>Original Video:</h3>
          <video controls width="600" src={originalVideoSrc}>
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      {processedVideoSrc && (
        <div>
          <h3>Processed Video:</h3>
          <video controls width="600" src={processedVideoSrc}>
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
