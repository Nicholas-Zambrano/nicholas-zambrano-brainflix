import "./Comments.scss";

function Comments({ currentVideo }) {
  // this is the currentVideo, which is updated with the setCurrentVideo function
  const comments = currentVideo.comments;
  // console.log(currentVideo.comments);
  return (
    <>
      {/* displaying the number of comments */}
      <p className="comments__numberOfComments">{comments.length} Comments</p>

{/* initialised a form */}
      <form className="form">

        <article className="form__wrapper">
          <div className="form__img"></div>
          <div className="form__inputWrapper">
            <div className="form__labelCommentWrapper">
              <label className="form__label">JOIN THE CONVERSATION</label>
              {/* the input for adding new comment */}
              <input
                type="text"
                name="comment"
                id="comment"
                placeholder="Add a new comment"
                className="form__comment"
              />
            </div>
            {/* button for submitting the comment */}
            <button className="form__button">COMMENT</button>
          </div>
        </article>

        {/* mapping through comments array in json file and displaying them */}
        {comments.map((comment) => {
          // convert timestamp to a normal date
          const convertedDate = new Date(
            comment.timestamp
          ).toLocaleDateString();

          return (
            // wrapping each comment in a article
            <article className="comments">
              <div className="comments__image"></div>
              <section className="comments__textWrapper">
                <div className="comments__nameDate">
                  <h3 className="comments__name">{comment.name}</h3>
                  <p className="comments__date">{convertedDate}</p>
                </div>
                <p className="comments__commented">{comment.comment}</p>
              </section>
            </article>
          );
        })}
      </form>
    </>
  );
}

export default Comments;
