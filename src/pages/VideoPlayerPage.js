import "../styles/partials/_resets.scss";
import "../App.scss";
import Video from "../component/Video/Video";
import { useEffect, useState } from "react";
import Comments from "../component/Comments/Comments";
import VideosList from "../component/VideosList/VideosList";
import VideoOverview from "../component/VideoOverview/VideoOverview";
import axios from "axios";
import { useParams } from "react-router-dom";

function VideoPlayerPage() {
  const API_BASE_URL = "https://project-2-api.herokuapp.com";
  const API_KEY = "1ca570a3-8506-4c77-9dfc-66a557d5396b";
  const [getvideos, setGetVideos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { videoID } = useParams();
  // console.log(videoID);
  console.log(getvideos); // this is the selected video

  function getVideo(id) {
    axios
      .get(`${API_BASE_URL}/videos/${id}?api_key=${API_KEY}`)
      .then((response) => {
        setGetVideos(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (videoID) {
      getVideo(videoID);
    } else {
      axios
        .get(`${API_BASE_URL}/videos?api_key=${API_KEY}`)
        .then((response) => {
          const firstVideoId = response.data[0].id;
          getVideo(firstVideoId);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [videoID]);

  if (isLoading) {
    return null;
  }

  return (
    <main className="app">
      <Video currentVideo={getvideos} />
      <section className="app__mainContainer">
        <section className="app__mainWrapper">
          <VideoOverview currentVideo={getvideos} />
          <Comments currentVideo={getvideos} />
        </section>

        <VideosList getvideos={getvideos} />
      </section>
    </main>
  );
}
export default VideoPlayerPage;
