import "../../styles/partials/_resets.scss";

import "../../App.scss";
// import Header from "../component/Header/Header";
import Header from "../Header/Header";
// import Video from "../component/Video/Video";
import Video from "../Video/Video";

import { useEffect, useState } from "react";
// import videosJson from "../Data/videos.json";
import videosJson from "../../Data/videos.json";
// import videoDetailsJson from "../Data/video-details.json";
import videoDetailsJson from "../../Data/video-details.json";
// import Comments from "../component/Comments/Comments";
import Comments from "../Comments/Comments";
// import VideosList from "../component/VideosList/VideosList";
import VideoList from "../VideosList/VideosList";
// import VideoOverview from "../component/VideoOverview/VideoOverview";
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

  //   function videoClicked(videoId) {
  //     const matchedID = videoDetails.find((videoDetailsId) => {
  //       // console.log("checking the match");
  //       console.log(videoDetailsId.id);
  //       // console.log("this is the split");
  //       // (videoId === "84e96018-4022-434e-80bf-000ce4cd12b8").remove()

  //       return videoDetailsId.id === videoId;
  //     });
  //     if (matchedID) {
  //       console.log("its a match");
  //       console.log(matchedID);

  //       // updating the video List by calling the 'setVideos' to update the state variable
  //       setVideos((updatedVideoList) => {
  //         // copied the videos list and added the current video to the list before being updated
  //         return [...updatedVideoList, currentVideo];
  //       });

  //       // you need to update the video with the matchedID, so call the function 'setCurrentVideo', now that video selected from the list becomes the new current video
  //       setCurrentVideo(matchedID);

  //       // now need to filter out that selected video from the list, by calling the update state function
  //       setVideos((filteredVid) => {
  //         return filteredVid.filter((removingVid) => {
  //           return (
  //             removingVid.id !== videoId // return all the videos that were not selected
  //           );
  //         });
  //       });
  //     }
  //   }

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
