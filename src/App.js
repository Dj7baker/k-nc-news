import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar/Navbar";
import ArticlesList from "./components/Articles/ArticlesList";
import Topics from "./components/Topics";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/Topics" element={<Topics />} />
          <Route path="/Articles" element={<ArticlesList />} />
        </Routes>
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
