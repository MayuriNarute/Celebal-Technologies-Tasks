import "./App.css";
import Forms from "./components/Form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Result from "./components/Result";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Forms />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
