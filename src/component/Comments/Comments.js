import "./Comments.scss";

function Comments({ currentVideo }) {
  //   function handleClick(event) {
  // event.preventDefault();
  //   }

  const comments = currentVideo.comments;

  //   function displayComments(comments) {
  //     comments.map((comment) => {
  //       return (
  //         <div>
  //           <p>{comment.name}</p>
  //           <p>{comment.comment}</p>
  //         </div>
  //       );
  //       // console.log(currentVideo.comment);
  //     });
  //   }

  console.log(currentVideo.comments);
  return (
    <form className="form">
      <label>JOIN THE CONVERSATION</label>
      <input
        type="text"
        name="comment"
        id="comment"
        placeholder="Add a new comment"
        className="form__comment"
      />

      <button>COMMENT</button>

      {comments.map((comment) => {
        return (
          <section className="comments">
            <div>
              <p>{comment.name}</p>
              <p>{comment.timestamp}</p>
            </div>
            <p>{comment.comment}</p>
          </section>
        );
      })}
    </form>
  );
}

export default Comments;
