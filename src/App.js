import "./styles/partials/_resets.scss";

import './App.scss';
import Header from './component/Header/Header';
import Video from './component/Video/Video';
import {useState} from "react"
import videosJson from "./assets/Data/videos.json"
import videoDetailsJson from "./assets/Data/video-details.json"


function App() {
  const [videos, setVidoes] = useState(videosJson);
  const [videoDetails, setVideoDetails] = useState(videoDetailsJson);
  const [currentVideo, setCurrentVideo] = useState(videoDetailsJson[0]);

  return (
    <div className="App">
      <Header />
      <Video currentVideo={currentVideo} videoDetails = {videoDetails} />
      {/* setCurrentVideo(videoObj)  */}
    </div>
  );
}

export default App;
