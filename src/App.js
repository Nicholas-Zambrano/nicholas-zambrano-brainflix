import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import VideoPlayerPage from "./pages/VideoPlayerPage";
import VideoUpload from "./pages/VideoUpload/VideoUpload";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<VideoPlayerPage />} />
          <Route path="/video/:videoID" element={<VideoPlayerPage />} />
          <Route path="/videoUpload" element={<VideoUpload />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
