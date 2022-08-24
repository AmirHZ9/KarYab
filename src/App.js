import { createMuiTheme } from "@mui/material";
import { Route, Routes } from "react-router";

import Home from "./components/home/Home";
import ShowJob from "./components/jobs/ShowJob";
import Post from "./components/newPost/Post";
import Index from "./layout/Index";

function App() {
  return (
    
    <div >

        <Index>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/job/:slug/*" element={<ShowJob />} />
            <Route path="/newJob" element={<Post />} />
          </Routes>
        </Index>
  
    </div>
  );
}

export default App;
