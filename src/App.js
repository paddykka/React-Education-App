import "./styles.css";
import Navbar from "./components/navbar";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Service from "./routes/Service";
import Destination from "./routes/Destination";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/serv" element={<Service />} />
        <Route path="/dest" element={<Destination />} />
      </Routes>
      <Navbar />
    </div>
  );
}
