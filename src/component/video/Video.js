import { useState } from "react";
import "./Video.scss";

function Video({ currentVideo }) {

  
  return (
    <section className="video">
      <video
        className="video__mainVid"
        poster={currentVideo.image}
        controls
      ></video>
      <section className="video__overview">
        {/* i got the first video title */}
        <h1 className="video__title">{currentVideo.title}</h1>

        <div className="video__analytics">
          <p>{currentVideo.channel}</p>
          <p>{currentVideo.views}</p>
          <p>{currentVideo.timestamp}</p>
          <p>{currentVideo.likes}</p>
        </div>

        <div className="video__description">
          <p>{currentVideo.description}</p>
          
        </div>
      </section>
    </section>
  );
}

// exporting the file
export default Video;
