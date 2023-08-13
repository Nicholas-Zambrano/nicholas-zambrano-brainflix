import axios from "axios";
import { useState } from "react";

import { useEffect } from "react";
import "./Comments.scss";

function Comments({ currentVideo }) {
  // this is the currentVideo, which is updated with the setCurrentVideo function
  // this gives you the current comments for that video
  const comments = currentVideo.comments;
  const API_BASE_URL = "http://localhost:7500/videos";
  const API_KEY = "1ca570a3-8506-4c77-9dfc-66a557d5396b";

  // created a usestate, which the comments are initalized to its initial set of of comments
  const [uploadComments, setUploadComments] = useState(comments);

  // triigers when comments variable change i.e the when video is switched
  useEffect(() => {
    // displays the current comments
    setUploadComments(comments);
  }, [comments]);

  // function is triggered,when submitting the comment form
  function handleComment(event) {
    event.preventDefault();

    // accessing the input comment
    const newComment = {
      comment: event.target.comment.value,
    };

    /* 
      sends a post request to the server to add a new comment for that specific video
      with the 'newComment' object that contains the new comment
    */
    axios
      .post(`${API_BASE_URL}/${currentVideo.id}/comments`, newComment)
      .then((response) => {
        // update the comments by appending the new comment to the original comment state
        setUploadComments([...uploadComments, response.data]);
      });
    event.target.reset();

    // wanted the page to auto refresh for each new comment
    // window.location.reload();
  }

  return (
    <>
      {/* displaying the number of comments */}
      <p className="comments__numberOfComments">{comments.length} Comments</p>

      {/* initialised a form */}
      <form onSubmit={handleComment} className="form">
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
            <button type="submit" className="form__button">
              COMMENT
            </button>
          </div>
        </article>

        {/* mapping through comments array  and displaying them */}
        {uploadComments.map((comment,index)  => {
          // convert timestamp to a normal datea
          const convertedDate = new Date(
            comment.timestamp
          ).toLocaleDateString();

          return (
            // wrapping each comment in a article
            //  the index of the comment is the key
            <article className="comments" key={index}>
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
