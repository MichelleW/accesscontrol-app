// File: src/App.js
import './AccessControl.css';
import Sidebar from './Sidebar';
import VideoGallery from './VideoGallery'; 


function AccessControl() { 
    return (
        <div className="dashboard">
            <Sidebar />
            <main className="main-content"> 
                <VideoGallery />
            </main>
        </div>
    );
}

export default AccessControl;