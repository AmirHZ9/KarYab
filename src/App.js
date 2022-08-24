import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/home/Home";
import JobsList from "./components/jobs/JobsList";
import ShowJob from "./components/jobs/ShowJob";
import Post from "./components/newPost/Post";
import Header from "./layout/Header";
import Index from "./layout/Index";
import RTL from "./Shared/RTl";
function App() {
  return (
    <div className="App">
      <RTL>
        <Index>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/job/:slug/*" element={<ShowJob />} />
            <Route path="/newJob" element={<Post />} />
          </Routes>
        </Index>
      </RTL>
    </div>
  );
}

export default App;
