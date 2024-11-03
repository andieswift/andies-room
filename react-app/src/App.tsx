import "./App.css";
import { spotifyAPI } from "./API/Spotify";
// import { useEffect } from "react";

function App() {
  return (
    <>
      <div></div>
      <h2>Andie's Space</h2>
      <button onClick={spotifyAPI}>SPOTIFY</button>
    </>
  );
}

export default App;
