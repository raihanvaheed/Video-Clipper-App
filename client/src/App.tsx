import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Video Clipper</h1>
      <VideoPlayer />
    </div>
  );
};

export default App;