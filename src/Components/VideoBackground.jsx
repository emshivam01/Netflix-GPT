import { useEffect } from "react";
import { options } from "../utils/constants";

const VideoBackground = () => {
  return (
    <div>
      <div className="w-screen overflow-hidden">
        <iframe
          className="w-screen aspect-video"
          src="https://www.youtube.com/embed/XtFI7SNtVpY?si=jRAZn3c6PT8Utp0N&amp;controls=0&autoplay=1&mute=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
          autoplay
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
