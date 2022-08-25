import { Route, Routes } from "react-router";
import "./fonts/font.css";
import "./App.css";
import Home from "./components/home/Home";
import ShowJob from "./components/jobs/ShowJob";
import ConfirmationPostedJob from "./components/newPost/ConfrmationPostedJob";
import Post from "./components/newPost/Post";
import Index from "./layout/Index";

function App() {
  return (
    <div>
      <Index>
        {/* <Home/> */}
        <Routes>
          <Route path="*" element={<Home />} />
          {/* <Route path="/job/:slug/" element={<ShowJob />} /> */}
          <Route path="/newJob" element={<Post />} />
          <Route path="/confirmation" element={<ConfirmationPostedJob />} />
        </Routes>
      </Index>
    </div>
  );
}

export default App;
