import "./styles/partials/_resets.scss";

import './App.scss';
import Header from './component/Header/Header';
import Video from './component/Video/Video';

function App() {
  return (
    <div className="App">
      
      <Header />
      <Video />
    </div>
  );
}

export default App;
