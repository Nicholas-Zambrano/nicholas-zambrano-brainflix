function VideoOverview({ currentVideo }) {
  const convertedDate = new Date(currentVideo.timestamp).toLocaleDateString();

  return (
    <section className="video__overview">
      {/* i got the first video title */}

      <section>
        <div className="video__titleWrapper">
          <h1 className="video__title">{currentVideo.title}</h1>
        </div>

        <div className="video__analytics">
          <div>
            <h3 className="video__channel">{currentVideo.channel}</h3>
          </div>

          {/* <section className="video__viewsDateWrapper">
        diplicated it here */}
          <div className="video__viewsWrapper ">
            <div className="video__viewsImg"></div>
            <p className="video__views  video__analytics--pTags">
              {currentVideo.views}
            </p>
          </div>

          <section className="video__viewsDateWrapperTablet">
            <div className="video__viewsWrapperTablet">
              <div className="video__viewsImg"></div>
              <p className="video__viewsTablet  video__analytics--pTags">
                {currentVideo.views}
              </p>
            </div>
            <p className="video__dateTablet video__analytics--pTagsTablet">
              {convertedDate}
            </p>
          </section>

          {/* duplicated here */}
          <p className="video__date video__analytics--pTags  video__dateTablet">
            {convertedDate}
          </p>
          {/* </section> */}
          {/* <div> */}
          <div className="video__likesWrapper">
            <div className="video__likesImg"></div>
            <p className="video__likes video__analytics--pTags">
              {currentVideo.likes}
            </p>
          </div>
          {/* </div> */}
        </div>
      </section>

      <div className="video__description">
        <p>{currentVideo.description}</p>
      </div>
    </section>
  );
}
export default VideoOverview;
