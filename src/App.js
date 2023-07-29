import "./styles/partials/_resets.scss";

import "./App.scss";
import Header from "./component/Header/Header";
import Video from "./component/Video/Video";
import { useState } from "react";
import videosJson from "./assets/Data/videos.json";
import videoDetailsJson from "./assets/Data/video-details.json";
import Comments from "./component/Comments/Comments";
import VideosList from "./component/VideosList/VideosList";

function App() {
  const [videos, setVideos] = useState(videosJson);
  const [videoDetails, setVideoDetails] = useState(videoDetailsJson);
  const [currentVideo, setCurrentVideo] = useState(videoDetailsJson[0]);
console.log(currentVideo);
console.log(videos);


function videoClicked(video){
  console.log(video);
  
}

  return (



    <main>
      <div className="app">
        <Header />

        <Video currentVideo={currentVideo}  />
        {/* setCurrentVideo(videoObj)  */}
      </div>

      <section className="comments">
        <Comments currentVideo={currentVideo} />
      </section>
      
      <section>
        {/* made the function as a prop so we can both access the data for the two JSON files */}
        <VideosList videos={videos}  videoClicked= {videoClicked}/>
      </section>
      
    </main>
  );
}

export default App;
