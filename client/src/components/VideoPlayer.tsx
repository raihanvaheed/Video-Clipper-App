// src/components/VideoPlayer.tsx
import React from 'react';

interface VideoPlayerProps {
  videoSrc: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
  return (
    <div>
      <video controls width="600" src={videoSrc}>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
