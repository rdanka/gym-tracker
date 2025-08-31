import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Workout from "./pages/Workout";
import Progress from "./pages/Progress";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex">
      <div className="p-3 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
