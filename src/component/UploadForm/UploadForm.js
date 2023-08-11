import "./UploadForm.scss";
// import "../UploadActions/UploadActions"
import UploadActions from "../UploadActions/UploadActions";
function UploadForm() {

  function handlesubmit(event) {
    event.preventDefault();
    console.log("hello");


  }

  return (
    <form onSubmit={handlesubmit} className="uploadForm">
      <div className="uploadForm__group">
        <label className="uploadForm__label">TITLE YOUR VIDEO</label>
        <input
          className="input input__addTitle "
          type="text"
          name="addTitle"
          placeholder="   Add a title to your video"
        />
      </div>

      <div className="uploadForm__group">
        <label className="uploadForm__label">ADD A VIDEO DESCRIPTION</label>
        <input
          className="input input__addDescription"
          type="text"
          name="addDescription"
          placeholder="   Add a description to your video"
        />
      </div>

      <section>
        {/* <button>Submit</button> */}
        <UploadActions />
      </section>
    </form>
  );
}
export default UploadForm;
