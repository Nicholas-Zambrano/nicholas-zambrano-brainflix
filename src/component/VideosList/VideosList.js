import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./VideosList.scss";

function VideosList({ videos, videoClicked }) {
  // skipped the first video , as thats already included in the main vid
  // use usestate to skip the first video !!!
  // const videoList = videos.slice(1);

  // console.log(videos);
  const API_BASE_URL = "https://project-2-api.herokuapp.com";
  const API_KEY = "1ca570a3-8506-4c77-9dfc-66a557d5396b";

  const [videosList, setVideosList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/videos?api_key=${API_KEY}`)
      .then((response) => {
        // console.log(response);
        setVideosList(response.data.slice(1));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            <Link key={video.id} to= {`/video/${video.id}`}>
              <div
                // call back function when a video is clicked
                className="videoList__wrapper"
                // onClick={() => {
                //   videoClicked(video.id);
                // }}
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
