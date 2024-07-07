// src/components/VideoPlayer.tsx
import React from 'react';

const VideoPlayer: React.FC = () => {
  return (
    <div>
      <video controls width="600">
        <source src="WelcomeToJurassicPark.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
