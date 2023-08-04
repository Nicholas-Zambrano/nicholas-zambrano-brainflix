// export default App;
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import NextVideo from "./pages/NextVideo";
import VideoPlayerPage from "./pages/VideoPlayerPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<VideoPlayerPage />} />
          {/* <Route path="/video/:videoId" element={<NextVideo />} /> */}
          <Route path="/video/:videoID" element={<VideoPlayerPage />} />

        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
