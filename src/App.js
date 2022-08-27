import { Route, Routes } from "react-router";
import "./fonts/font.css";
import "./App.css";
import Home from "./components/home/Home";
import ConfirmationPostedJob from "./components/newPost/ConfrmationPostedJob";
import Post from "./components/newPost/Post";
import Index from "./layout/Index";
import ShowJob from "./components/jobs/ShowJob";
function App() {
  return (
    <>
      <Index>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/jobs/job/:slug/:id" element={<ShowJob />} />

          <Route path="/newJob" element={<Post />} />
          <Route path="/confirmation" element={<ConfirmationPostedJob />} />
        </Routes>
  
      </Index>

      
    </>
  );
}

export default App;
