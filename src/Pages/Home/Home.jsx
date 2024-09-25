// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import Comments from '../components/Comments/Comments';
import { getVideoStreamUrl } from '../api/video/videoService';

const Home = () => {
  const [user, setUser] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const videoId = '123'; // Hardcoded for demo, replace with dynamic ID

  useEffect(() => {
    getVideoStreamUrl(videoId).then((url) => setVideoUrl(url));
  }, [videoId]);

  const handleLogin = () => {
    // Simulate login
    setUser({ email: 'user@example.com' });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <Header user={user} onLogin={handleLogin} onLogout={handleLogout} />
      <main>
        <VideoPlayer streamUrl={videoUrl} />
        <Comments videoId={videoId} />
      </main>
    </div>
  );
};

export default Home;
