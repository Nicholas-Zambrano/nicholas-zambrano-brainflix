import { useState } from "react";
import "./Video.scss";
// import VideoOverview from "../VideoOverview/VideoOverview";

function Video({ currentVideo }) {

  return (
    <section className="video">
      <div className="video__mainVideoWrapper">
        <video
          className="video__mainVid"
          poster={currentVideo.image}
          controls
        ></video>
      </div>
      {/* <VideoOverview currentVideo={currentVideo} /> */}
    </section>
  );
}

// exporting the file
export default Video;
