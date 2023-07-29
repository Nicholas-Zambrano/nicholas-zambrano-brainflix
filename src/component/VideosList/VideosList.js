import "./VideosList.scss";
function VideosList({ videos, videoClicked }) {
  const videoList = videos.slice(1); // skipped the first video , as thats already included in the main vid
  // console.log(videoList[].id);

  console.log(videos);
  return (
    // console.log("hello")
    <section className="videoList">
      <h3 className="videoList__mainTitle">NEXT VIDEOS</h3>
      <section className="videoList__container">
        {videoList.map((video) => {
          // console.log(video.id);
          return (
            <div
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
