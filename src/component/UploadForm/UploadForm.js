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

    const newVideo = {
      // allows to contain the title and description of the image
      title: event.target.addTitle.value,
      description: event.target.addDescription.value,
      image: "http://localhost:7500/public/vegeta.jpeg",
    };
    console.log(newVideo);

    axios.post(`${API_BASE_URL}`, newVideo).then((response) => {
      console.log(response.data);
    });

    setNewContent(true);

    setTimeout(() => {
      setNewContent(false);
      navigate("/");
    }, 2000);
  }

  function showContent() {
    if (newContent === true) {
      return <div className="uploadActions__newContentWrapper"></div>;
    } else {
      return (
        <div className="uploadActions">
          <button type="submit" className="uploadActions__publish">
            PUBLISH
          </button>

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
