import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./VideosList.scss";

function VideosList({ getvideos }) {
  // console.log(videos);
  const API_BASE_URL = "http://localhost:7500/videos";

  const [videosList, setVideosList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // console.log("he");

  useEffect(() => {
    axios
      // .get(`${API_BASE_URL}/videos?api_key=${API_KEY}`)
      .get(`${API_BASE_URL}`)
      .then((response) => {
        // console.log(response);
        // filtering the array, and returning the videos that are not currently selected as main vid
        const filteredVid = response.data.filter((videoSelected) => {
          return videoSelected.id !== getvideos.id;
        });

        // updating the array, with the videos that dont have the same id as the main video
        setVideosList(filteredVid);
        console.log(filteredVid);

        // setVideosList(response.data)
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getvideos.id]); // the use effect is executed when the video id changes

  if (isLoading) {
    return <p>Its loading</p>;
  }

  return (
    <section className="videoList">
      {/* the main title for the video list */}
      <h3 className="videoList__mainTitle">NEXT VIDEOS</h3>
      <section className="videoList__container">
        {/* mapping through video list array */}
        {videosList.map((video) => {
          // console.log(video.id);
          return (
            // so need to link each video:
            <Link
              key={video.id}
              to={`/video/${video.id}`}
              className="videoList__link"
            >
              <div
                // call back function when a video is clicked
                className="videoList__wrapper"
              >
                <img
                  className="videoList__image"
                  src={video.image}
                  alt={video.title}
                ></img>
                <div className="videoList__description">
                  <h3 className="videoList__titles">{video.title}</h3>
                  <p>{video.channel}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </section>
  );
}

export default VideosList;
