import "./UploadActions.scss";

function UploadActions() {
  return (
    <div className="uploadActions">
      <button className="uploadActions__publish">PUBLISH</button>

      <span className="upploadActions__cancelWrapper">
        <h3 className="uploadActions__cancel">CANCEL</h3>
      </span>
    </div>
  );
}

export default UploadActions;
