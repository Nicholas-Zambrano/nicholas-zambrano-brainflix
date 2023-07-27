import video from "../../assets/Data/videos.json";
import { useState } from "react";

function Video() {
  // const [video,setVideo] = useState([])
  return (
    <section className="video">
      <video className="video__main" poster={video.image} controls>
        {/* adding the source tag */}
        {/* <source src={video.video}/> */}
        
      </video>

      <section>
        {/*  i got the first video title */}
        <h1 className="Video__title">{video[0].title}</h1>
        {/* {video.map(video =>{
            return(
                <h1>{video.title}</h1>
            )
        })} */}

      </section>

    </section>
  );
}

// exporting the file
export default Video;
