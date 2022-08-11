import Navigation from "components/Navigation/Navigation";
import DetailPage from "pages/DetailPage";
import Home from "pages/Home";
import List from "pages/List";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/poke/:id" element={<DetailPage />} />
          <Route exact path="/list" element={<List />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
