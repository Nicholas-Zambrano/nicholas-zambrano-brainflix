import "./VideosList.scss";
function VideosList({ videos, videoClicked }) {
  // skipped the first video , as thats already included in the main vid
  const videoList = videos.slice(1);

  // console.log(videos);

  return (
    <section className="videoList">
      {/* the main title for the video list */}
      <h3 className="videoList__mainTitle">NEXT VIDEOS</h3>
      <section className="videoList__container">
        {/* mapping through video list array */}
        {videoList.map((video) => {
          // console.log(video.id);
          return (
            <div
            // call back function when a video is clicked
              className="videoList__wrapper"
              onClick={() => {
                videoClicked(video.id);
              }}
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
          );
        })}
      </section>
    </section>
  );
}

export default VideosList;
