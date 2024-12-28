"use client"
import React, { useEffect, useRef} from 'react';

const VideoContainer = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    // playing video when page are mount
    useEffect(() => {
        const playVideo = async () => {
            try {
                // Try to play the video
                if (videoRef.current) {
                    videoRef.current.muted = true; // Ensure it's muted
                    await videoRef.current.play();
                }
            } catch (error) {
                console.error("Video autoplay failed:", error);
            }
        };

        playVideo();
    }, []);

    return (
        <div className="w-full h-full relative">
            <video
                ref={videoRef}
                src='/authVideo.mp4'
                className="w-full h-full object-cover"
                muted
                autoPlay
                loop
            />
        </div>
    );
};

export default VideoContainer;