import "./UploadForm.scss";
import UploadActions from "../UploadActions/UploadActions";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function UploadForm() {
  const [newContent, setNewContent] = useState(false);
  const navigate = useNavigate();
  const API_BASE_URL = "http://localhost:7500/videos";

  function handlesubmit(event) {
    event.preventDefault();

    /**
     * created an object which is filled with properties for the uploaded video
     */
    const newVideo = {
      // allows to contain the title and description of the image
      title: event.target.addTitle.value,
      description: event.target.addDescription.value,
      image: "http://localhost:7500/public/vegeta.jpeg",
    };

    // send a post reqiest to the server to add the new video
    axios.post(`${API_BASE_URL}`, newVideo).then((response) => {
      console.log(response.data);
    });

    // when submitting the 'publish' button , we want the new content to show
    setNewContent(true);

    /**  allowing the publish notification to be displayed for 3 seconds,
     *  and set the content false to display original content
     */
    setTimeout(() => {
      setNewContent(false);
      navigate("/");
    }, 2000);
  }

  /**
   * 
   * if content is true, then display the new content
   * otherwise display the orignal content
   */
  function showContent() {
    if (newContent === true) {
      return <div className="uploadActions__newContentWrapper"></div>;
    } else {
      return (
        <div className="uploadActions">
          <button type="submit" className="uploadActions__publish">
            PUBLISH
          </button>

          {/* the 'cancel' links to the home page */}
          <Link className="uploadActions__cancelLink" to= "/">
            <span className="uploadActions__cancelWrapper">
              <h3 className="uploadActions__cancel">CANCEL</h3>
            </span>
          </Link>
        </div>
      );
    }
  }

  return (
    // made the form an onsubmit, in order to trigger a function 
    <form onSubmit={handlesubmit} className="uploadForm">
      <div className="uploadForm__group">
        <label className="uploadForm__label">TITLE YOUR VIDEO</label>
        <input
          className="input input__addTitle "
          type="text"
          name="addTitle"
          id="addTitle"
          placeholder="   Add a title to your video"
        />
      </div>

      <div className="uploadForm__group  uploadForm__group--description">
        <label className="uploadForm__label">ADD A VIDEO DESCRIPTION</label>
        <input
          className="input input__addDescription"
          type="text"
          name="addDescription"
          id="addDescription"
          placeholder="   Add a description to your video"
        />
      </div>

      <section>{showContent()}</section>
    </form>
  );
}
export default UploadForm;
