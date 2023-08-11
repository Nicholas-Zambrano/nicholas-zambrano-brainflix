import "./UploadActions.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UploadActions() {
  const [newContent, setNewContent] = useState(false);
  const navigate = useNavigate();

  const handlePublish = () => {
    // we set new content to true as we want something to be displayed when clicking the button
    setNewContent(true);

    // we added a timeout to show the new content for a temporay amount of time
    // once the time is completed set it back to false and redirect to home page
    setTimeout(() => {
      setNewContent(false);
      navigate("/");
    }, 2000);
  };

  // created a function to show either the new or original content
  function showContent() {
    if (newContent === true) {
      return <div className="uploadActions__newContentWrapper"></div>;
    }

    // if new content is false then show original content
    else {
      return (
        <div className="uploadActions">
          <button type="button"
            // onClick={() => handlePublish()}
            className="uploadActions__publish"
          >
            PUBLISH
          </button>

          <span className="uploadActions__cancelWrapper">
            <h3 className="uploadActions__cancel">CANCEL</h3>
          </span>
        </div>
      );
    }
  }

  return <>{showContent()}</>;
}

export default UploadActions;
