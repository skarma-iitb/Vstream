// src/api/video/videoService.js
import axios from 'axios';

const VIDEO_API_URL = 'http://localhost:5000/api/video'; // Replace with your actual Video Service URL

// Fetch the video metadata from the server
export const getVideoMetadata = async (videoId) => {
  try {
    const response = await axios.get(`${VIDEO_API_URL}/${videoId}/metadata`);
    return response.data; // Return the metadata like title, description, etc.
  } catch (error) {
    console.error('Error fetching video metadata:', error);
    throw error;
  }
};

// Fetch the video stream URL (for video player to use)
export const getVideoStreamUrl = async (videoId) => {
  try {
    const response = await axios.get(`${VIDEO_API_URL}/${videoId}/stream`);
    return response.data; // Return the streaming URL
  } catch (error) {
    console.error('Error fetching video stream URL:', error);
    throw error;
  }
};