// File: src/components/VideoGallery.js
import React, { useEffect, useState } from 'react';
import VideoModal from './VideoModal';

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=security+footage&type=video&key=${YOUTUBE_API_KEY}&maxResults=10`;

function VideoGallery() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video, index) => {
    setSelectedVideo({
      video,
      related: videos.filter((v, i) => i !== index).slice(0, 3)
    });
    setModalOpen(true);
  };

  useEffect(() => {
    if (!YOUTUBE_API_KEY) {
      setError('YouTube API key is missing. Please set REACT_APP_YOUTUBE_API_KEY in your .env.local or .env file.');
      setLoading(false);
      return;
    }
    fetch(YOUTUBE_URL)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch videos');
        return res.json();
      })
      .then(data => {
        setVideos(Array.isArray(data.items) ? data.items : []);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="video-gallery">Loading videos...</div>;
  if (error) return <div className="video-gallery" style={{ color: 'red' }}>{error}</div>;
  return (
    <>
      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        video={selectedVideo?.video}
        relatedVideos={selectedVideo?.related || []}
        onRelatedClick={(video) => setSelectedVideo({
          video,
          related: videos.filter((v) => v.id.videoId !== video.id.videoId).slice(0, 3)
        })}
      />
      <div className="video-gallery">
        {videos.length === 0 && <p>No videos found.</p>}
        {videos.map((video, index) => (
          <div key={video.id?.videoId || video.etag || index} className={`video-card ${index < 3 ? 'highlight' : ''}`}>
            <img
              src={video.snippet?.thumbnails?.medium?.url}
              alt={video.snippet?.title || 'Video'}
              onClick={() => handleVideoClick(video, index)}
              style={{ cursor: 'pointer' }}
            />
            <p>{video.snippet?.title || 'Untitled'}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default VideoGallery;