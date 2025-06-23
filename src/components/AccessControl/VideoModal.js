import React from 'react';
import './VideoModal.css';

function VideoModal({ isOpen, onClose, video, relatedVideos = [] }) {
    if (!isOpen || !video) return null;

    const handleVideoClick = (videoId) => {
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
        window.open(videoUrl, '_blank');
    };

    return (
        <div className="video-modal-overlay" onClick={onClose}>
            <div className="video-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>
                    ×
                </button>

                <div className="modal-content">
                    <div className="main-video-section">
                        <iframe
                            src={`https://www.youtube.com/embed/${video.id?.videoId}`}
                            title={video.snippet?.title || 'Video'}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="main-video"
                        ></iframe>
                        <h3 className="video-title">{video.snippet?.title || 'Untitled'}</h3>
                        <p className="video-description">{video.snippet?.description || 'No description available'}</p>
                    </div>

                    <div className="related-videos-section">
                        <h4>Related Videos</h4>
                        <div className="related-videos-grid">
                            {relatedVideos.slice(0, 3).map((relatedVideo, index) => (
                                <div
                                    key={relatedVideo.id?.videoId || index}
                                    className="related-video-card"
                                    onClick={() => handleVideoClick(relatedVideo.id?.videoId)}
                                >
                                    <img
                                        src={relatedVideo.snippet?.thumbnails?.medium?.url}
                                        alt={relatedVideo.snippet?.title || 'Related Video'}
                                    />
                                    <p className="related-video-title">{relatedVideo.snippet?.title || 'Untitled'}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoModal; 