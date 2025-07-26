import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx"
import Upload from "./components/Upload.jsx"
import Login from "./components/Login.jsx"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h1>Error not found 404</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
