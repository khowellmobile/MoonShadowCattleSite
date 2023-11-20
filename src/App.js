import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
