import React, { useEffect } from 'react';
import './App.css';
import './verkadaStyle.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * These configurations help control which thumbnails to fetch
 * for the timelapse viewer.
 * 
 * NOTE: Please do not edit this object unless instructed to by the interviewer.
 */
const API_CONFIG = {
    /**
     * The API path used to fetch the images
     */
    url: 'https://hiring.verkada.com/thumbs',

    /**
     * Start time of available timelapse images in milliseconds
     */
    startTimestamp: 1500348260,

    /**
     * End time of available timelapse images milliseconds
     */
    endTimestamp: 1503031520,

    /**
     * The frames per second used to capture the timelapse images
     */
    framesPerSecond: 50,

    /** The number of frames we want to fetch */
    frameCount: 30,

}

const PauseIcon = () => <svg width="8" height="14" fill="currentColor" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><path d="M1 0H0v14h1V0zM8 0H7v14h1V0z" stroke="none" /></svg>;

const PlayIcon = () => <svg width="18" height="16" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6 3l12 7-12 7V3zm0-1c-.17 0-.34.04-.5.13-.31.18-.5.51-.5.87v14c0 .36.19.69.5.87a.993.993 0 0 0 1-.01l12-7A1 1 0 0 0 19 10a1 1 0 0 0-.5-.86l-12-7C6.34 2.05 6.17 2 6 2z" stroke="none" /></svg>

// EDIT THE CODE BELOW

const getFrames = () => {
    const MS_PER_FRAME = (1 / API_CONFIG.framesPerSecond) * 1000;

    return new Array(API_CONFIG.frameCount).fill().map((_, index) => {
        const timestamp = API_CONFIG.startTimestamp + (index * MS_PER_FRAME);

        return {
            frameNumber: index,
            src: `${API_CONFIG.url}/${timestamp}.jpg`
        }
    });
}

const createMarkers = (frames, currentFrame, onMarkerClick) => {
    return frames.map((frame, idx) => (
        <div
            key={idx}
            className={`marker ${currentFrame === idx ? 'active' : ''}`}
            onClick={() => onMarkerClick(idx)}
        >
            |
        </div>
    ));
}

const Frame = ({ frame, currentFrame, onMarkerClick, play, togglePlay }) => {
    const frames = getFrames();

    return (
        <div
            className={"frameWrapper"}
            key={`historical-video-frame-${frame.frameNumber}`}
        >
            <div className={"debug"}>
                <div className={"debugSection"}>
                    Debug Information
                    <div>Frame #: {frame.frameNumber}</div>
                    <div>Current Frame: {currentFrame + 1}</div>
                </div>
                <div className={"debugSection"}>
                    API Configuration
                    <pre>{JSON.stringify(API_CONFIG, undefined, 2)}</pre>
                </div>
            </div>
            <img
                className={"frameImage"}
                src={frame.src}
                alt={`Frame ${frame.frameNumber + 1}`}
            />
            <div className="player">
                <div className='controls' onClick={togglePlay}>
                    {play ? <PlayIcon /> : <PauseIcon />}
                </div>
                <div className="markers-container">
                    {createMarkers(frames, currentFrame, onMarkerClick)}
                </div>
            </div>
        </div>
    );
};

function VerkadaPlayer() {
    const [frames] = React.useState(getFrames());
    const [currentFrame, setCurrentFrame] = React.useState(0);
    const [play, setPlay] = React.useState(false);

    const handleMarkerClick = (idx) => {
        setCurrentFrame(idx);
    };

    useEffect(() => {
        if (!play) return;

        const timeout = setTimeout(() => {
            setCurrentFrame(prev => {
                const next = prev + 1;
                if (next >= frames.length) {
                    setPlay(false); // stop playback
                    return 0; // reset to first frame
                }
                return next;
            });
        }, 10000 / API_CONFIG.framesPerSecond); // ~20ms if 50fps

        return () => clearTimeout(timeout);

        /*
        `currentFrame` and `frames.length` are included as dependencies in the `useEffect` hook
        because the effect relies on their values to determine when to advance frames and when to stop playback.
        - `currentFrame`: When this changes (e.g., user clicks a marker or playback advances), the effect needs to re-run
          to schedule the next frame or stop playback if at the end.
        - `frames.length`: If the number of frames ever changes (e.g., new data loaded), the effect should re-evaluate
          the stopping condition (`next >= frames.length`).
        Without these dependencies, the effect could use stale values and not behave correctly.
        */
    }, [play, currentFrame, frames.length]);


    const togglePlay = () => {
        setPlay(prev => !prev);
    }
    return (
        <div className="Verka">
            <Frame
                frame={frames[currentFrame]}
                currentFrame={currentFrame}
                onMarkerClick={handleMarkerClick}
                play={play}
                togglePlay={togglePlay}
            />
        </div>
    );
}

export default VerkadaPlayer;