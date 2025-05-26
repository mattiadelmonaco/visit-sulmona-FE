import { useState, useRef } from "react";

export default function Jumbotron() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
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
    <div className="jumbotron-container">
      <video
        ref={videoRef}
        className="jumbotron-video"
        src="images/videos/intro.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>
      <div className="jumbotron-overlay cursor-pointer" onClick={togglePlay}>
        <h1 className="text-5xl font-bold my-4">Benvenuto su Visits Sulmona</h1>
        <p className="text-xl sm:text-3xl">Scopri le meraviglie della città</p>
        <button
          onClick={togglePlay}
          className="absolute bottom-14 right-4 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all cursor-pointer"
        >
          {isPlaying ? (
            <i class="fa-solid fa-pause text-[#99031e] px-2"></i>
          ) : (
            <i class="fa-solid fa-play text-[#99031e] px-2"></i>
          )}
        </button>
        <p className="absolute bottom-4 right-4 text-sm text-white">
          Riprese di{" "}
          <a href="https://www.ondatv.tv/" className="underline font-bold">
            Onda TV
          </a>{" "}
          -{" "}
          <a
            href="https://www.youtube.com/watch?v=DQm0KqTQFak"
            className="underline font-bold"
          >
            Link del video su YouTube
          </a>
        </p>
      </div>
    </div>
  );
}
