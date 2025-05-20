export default function Jumbotron() {
  return (
    <div className="jumbotron-container">
      <video
        className="jumbotron-video"
        src="images/videos/intro.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>
      <div className="jumbotron-overlay">
        <h1 className="text-5xl font-bold my-4">Benvenuto su Visits Sulmona</h1>
        <p className="text-xl sm:text-3xl">Scopri le meraviglie della città</p>
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
