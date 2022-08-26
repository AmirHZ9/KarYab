import { Route, Routes } from "react-router";
import "./fonts/font.css";
import "./App.css";
import Home from "./components/home/Home";
import ConfirmationPostedJob from "./components/newPost/ConfrmationPostedJob";
import Post from "./components/newPost/Post";
import Index from "./layout/Index";

function App() {
  return (
    <div>
      <Index>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/newJob" element={<Post />} />
          <Route path="/confirmation" element={<ConfirmationPostedJob />} />
        </Routes>
  
      </Index>

      
    </div>
  );
}

export default App;
