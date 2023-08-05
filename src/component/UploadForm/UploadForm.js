import "./UploadForm.scss";
function UploadForm() {
  return (
    <form className="uploadForm">
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
        <input className="input input__addDescription"
        type="text"
        name="addDescription"
        placeholder="   Add a description to your video"
        />
      </div>
    </form>
  );
}
export default UploadForm;
