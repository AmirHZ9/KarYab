import "./App.css";
import Home from "./components/home/Home";
import JobsList from "./components/jobs/JobsList";
import Header from "./layout/Header";
import Index from "./layout/Index";
function App() {
  return (
    <div className="App">
      <Index>
        <Home />
    
      </Index>
    </div>
  );
}

export default App;
