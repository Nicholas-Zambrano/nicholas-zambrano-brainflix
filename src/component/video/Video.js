import { useState } from "react";
import "./Video.scss";
// import VideoOverview from "../VideoOverview/VideoOverview";

// made a 'Video' component and accepted 'currentVideo' as a prop
function Video({ currentVideo }) {

  // displays the current main video 
  return (
    <section className="video">
      <div className="video__mainVideoWrapper">
        <video
          className="video__mainVid"
          poster={currentVideo.image}
          controls
        ></video>
      </div>
    </section>
  );
}

// exporting the file
export default Video;
