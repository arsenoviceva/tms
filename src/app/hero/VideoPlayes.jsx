import React, { useRef, useState } from "react";

export const VideoPlayer = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="video-player-div">
      <video
        ref={videoRef}
        src={videoSrc}
        onClick={handlePlayPause}
        className="video-player"
      />
      {!isPlaying && (
        <img
          src="../../images/ion_play.png"
          alt="Play"
          onClick={handlePlayPause}
          className="play-button"
        />
      )}
    </div>
  );
};
