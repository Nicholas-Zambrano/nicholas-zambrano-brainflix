import { useState } from "react";
import "./Video.scss";

function Video({ currentVideo }) {
  const convertedDate = new Date(currentVideo.timestamp).toLocaleDateString();

  return (
    <section className="video">
      <video
        className="video__mainVid"
        poster={currentVideo.image}
        controls
      ></video>
      <section className="video__overview">
        {/* i got the first video title */}
        <div className="video__titleWrapper">
          <h1 className="video__title">{currentVideo.title}</h1>
        </div>

        <div className="video__analytics">
          <h3 className="video__channel">{currentVideo.channel}</h3>
          <div className="video__viewsWrapper">
            <div className="video__viewsImg"></div>
            <p className="video__views  video__analytics--pTags">
              {currentVideo.views}
            </p>
          </div>
          <p className="video__date video__analytics--pTags">{convertedDate}</p>
          <div>
            <div className="video__likesWrapper">
              <div className="video__likesImg"></div>
              <p className="video__likes video__analytics--pTags">
                {currentVideo.likes}
              </p>
            </div>
          </div>
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
