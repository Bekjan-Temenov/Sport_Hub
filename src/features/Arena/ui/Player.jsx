import React, { useRef } from "react";
import Container from "../../../shared/helpers/Container";
import videoFile from "../../../shared/assets/video/Redux Toolkit Tutorial - 2 - Getting Started.mp4";
import playIcon from "../../../shared/assets/svg/playerr.svg"; 

function Player() {
  const videoRef = useRef(null);
  const playButtonRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      playButtonRef.current.classList.add("hidden");
    } else {
      videoRef.current.pause();
      playButtonRef.current.classList.remove("hidden");
    }
  };

  return (
    <Container>
      <div className="relative w-[100%] border max-h-[548px] mx-auto my-[50px]">
        <video
          ref={videoRef}
          onClick={togglePlay}
          className="w-full h-full"
          controls
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          ref={playButtonRef}
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 cursor-pointer"
        >
          <img src={playIcon} alt="Play" className="w-16 h-16" />
        </div>
      </div>
    </Container>
  );
}

export default Player;
