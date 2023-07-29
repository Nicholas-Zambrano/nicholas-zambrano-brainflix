import "./Comments.scss";

function Comments({ currentVideo }) {
  //   function handleClick(event) {
  // event.preventDefault();
  //   }

  const comments = currentVideo.comments; // this is the currentVideo, which is updated with the setCurrentVideo function
  console.log(currentVideo.comments);
  return (
    <>
      {/* displaying the number of comments */}
      <p className="comments__numberOfComments">{comments.length} Comments</p>

      <form className="form">
        <article className="form__wrapper">
          <div className="form__img"></div>
          <div className="form__inputWrapper">
            <label className="form__label">JOIN THE CONVERSATION</label>
            <input
              type="text"
              name="comment"
              id="comment"
              placeholder="Add a new comment"
              className="form__comment"
            />

            <button className="form__button">COMMENT</button>
          </div>
        </article>
        {comments.map((comment) => {
          const convertedDate = new Date(
            comment.timestamp
          ).toLocaleDateString();

          return (
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
