import "../../styles/partials/_resets.scss";
import "../../App.scss";
import Video from "../Video/Video";
import { useEffect, useState } from "react";
import Comments from "../Comments/Comments";
import VideoOverview from "../VideoOverview/VideoOverview";
import axios from "axios";

function videoDetails({ videoID }) {
  const API_BASE_URL = "https://project-2-api.herokuapp.com";
  const API_KEY = "1ca570a3-8506-4c77-9dfc-66a557d5396b";

  // const [videos, setVideos] = useState(null);
  //   const [videoDetails, setVideoDetails] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //finding the match of the id

  // fetch the video details from API when yh video changes
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/videos/${videoID}?api_key=${API_KEY}`)
      // .get("https://project-2-api.herokuapp.com/videos/c05b9a93-8682-4ab6-aff2-92ebb4bbfc14?api_key=1ca570a3-8506-4c77-9dfc-66a557d5396b")
      .then((response) => {
        setCurrentVideo(response.data);
        setIsLoading(false);
      });
  }, [videoID]);

  if (isLoading) {
    return null;
  }

  return (
    <main className="app">
      <Video currentVideo={currentVideo} />
      <section className="app__mainContainer">
        <section className="app__mainWrapper">
          <VideoOverview currentVideo={currentVideo} />
          <Comments currentVideo={currentVideo} />
        </section>
        {/* made the function as a prop so we can both access the data for the two JSON files */}
        {/* <VideosList videos={videos} videoClicked={videoClicked} /> */}
      </section>
    </main>
  );
}

export default videoDetails;
