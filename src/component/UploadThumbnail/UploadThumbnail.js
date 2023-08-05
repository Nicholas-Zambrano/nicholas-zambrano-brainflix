import "./UploadThumbnail.scss";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";

function UploadThumbnail() {
  return (
    <section className="thumbnail">
        <h2 className="thumbnail__title">VIDEO THUMBNAIL</h2>
      <img className="thumbnail__image" src={thumbnail}></img>
    </section>
  );
}

export default UploadThumbnail;
