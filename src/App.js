import "./styles/partials/_resets.scss";

import "./App.scss";
import Header from "./component/Header/Header";
import Video from "./component/Video/Video";
import { useState } from "react";
import videosJson from "./Data/videos.json";
import videoDetailsJson from "./Data/video-details.json";
import Comments from "./component/Comments/Comments";
import VideosList from "./component/VideosList/VideosList";
import VideoOverview from "./component/VideoOverview/VideoOverview";

function App() {
  const [videos, setVideos] = useState(videosJson);
  const [videoDetails, setVideoDetails] = useState(videoDetailsJson);
  const [currentVideo, setCurrentVideo] = useState(videoDetailsJson[0]);
  const [updateMainVideo, setUpdateMainVideo] = useState(videoDetailsJson[0]);
  // console.log(currentVideo); // this gives us the first element
  // console.log(videos);

  // console.log("nico");
  // console.log(videoDetails.id); // this one includes the comments(bigger data)
  // console.log(videos); // this is the shorter one
  // console.log("heloo nico");

  function videoClicked(videoId) {
    //finding the match of the id
    const matchedID = videoDetails.find((videoDetailsId) => {
      console.log("checking the match");
      console.log(videoDetailsId.id);
      console.log("this is the split");
      // (videoId === "84e96018-4022-434e-80bf-000ce4cd12b8").remove()

      return videoDetailsId.id === videoId;
    });
    if (matchedID) {
      console.log("its a match");
      console.log(matchedID);

      // updating the video List by calling the 'setVideos' to update the state variable
      setVideos((updatedVideoList) => {
        // copied the videos list and added the current video to the list before being updated
        return [...updatedVideoList, currentVideo];
      });

      // you need to update the video with the matchedID, so call the function 'setCurrentVideo', now that video selected from the list becomes the new current video
      setCurrentVideo(matchedID);

      // updated the main video by calling the update state function , with the video selected from the video list
      // setUpdateMainVideo(matchedID);

      // now need to filter out that selected video from the list, by calling the update state function
      setVideos((filteredVid) => {
        return filteredVid.filter((removingVid) => {
          return (
            removingVid.id !== videoId // return all the videos that were not selected
          );
        });
      });
    }
  }
  console.log("checking id");

  console.log("checking all id");

  // mapping through the ids in videoDetails
  // const videoDetailsID = videoDetails.map((video) => {
  //   return video.id;
  // });
  // console.log(videoDetailsID);

  return (
    <main className="app">
      <div className="app__header">
        <Header />
      </div>

      <Video currentVideo={currentVideo} videoClicked={videoClicked} />
      {/* setCurrentVideo(videoObj)  */}
      <section className="app__mainContainer">
        <section className="app__mainWrapper">
          <VideoOverview currentVideo={currentVideo} />
          {/* <section className="comments"> */}
          <Comments currentVideo={currentVideo} />
          {/* </section> */}
        </section>
        {/* made the function as a prop so we can both access the data for the two JSON files */}
        <VideosList videos={videos} videoClicked={videoClicked} />
      </section>
    </main>
  );
}

export default App;
