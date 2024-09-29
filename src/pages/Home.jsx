import React from 'react';
import VideoGrid from '../components/VideoGrid';

const Home = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Home - Video Streaming App</h1>
      <VideoGrid />
    </div>
  );
};

export default Home;