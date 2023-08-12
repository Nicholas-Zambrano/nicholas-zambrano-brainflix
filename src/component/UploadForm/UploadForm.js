import "./UploadForm.scss";
import UploadActions from "../UploadActions/UploadActions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UploadForm() {
  const [newContent, setNewContent] = useState(false);
  const navigate = useNavigate();

  function handlesubmit(event) {
    event.preventDefault();

    const newVideo = {
      title: event.target.addTitle.value,
      description: event.target.addDescription.value,
    };
    
    axios.post("http://localhost:7500/videos",newVideo)
    .then((response)=>{
      console.log(response.data);
    })

    console.log("hello");
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

          <span className="uploadActions__cancelWrapper">
            <h3 className="uploadActions__cancel">CANCEL</h3>
          </span>
        </div>
      );
    }
  }

  return (
    <form onSubmit={handlesubmit} className="uploadForm">
      {/* <section> */}
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
      {/* </section> */}

      <section>{showContent()}</section>
    </form>
  );
}
export default UploadForm;
