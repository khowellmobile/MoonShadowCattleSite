import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import CattlePage from "./pages/CattlePage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/cattle" element={<CattlePage />} />
    </Routes>
  );
}

export default App;
