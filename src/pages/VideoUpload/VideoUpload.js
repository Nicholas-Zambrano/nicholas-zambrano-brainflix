import UploadActions from "../../component/UploadActions/UploadActions";
import UploadForm from "../../component/UploadForm/UploadForm";
import UploadThumbnail from "../../component/UploadThumbnail/UploadThumbnail";
import VideoUploadTitle from "../../component/VideoUploadTitle/VideoUploadTitle";
import "./VideoUpload.scss";

function VideoUpload() {
  return (
    <main className="uploadMain">
      <VideoUploadTitle />
      <section className="uploadMain__wrapper">
        <UploadThumbnail />
        <section className="uploadMain__form">
          <UploadForm />
        </section>
      </section>

      <section className="">
        <UploadActions />
      </section>
    </main>
  );
}
export default VideoUpload;
