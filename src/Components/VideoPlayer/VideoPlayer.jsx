// src/components/VideoPlayer/VideoPlayer.js
import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ streamUrl }) => {
  return (
    <div className="video-player">
      <video width="800" controls>
        <source src={streamUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;