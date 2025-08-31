import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { supabase } from "./lib/supabase";
import Home from "./pages/Home";
import Progress from "./pages/Progress";
import Workout from "./pages/Workout";

function App() {

  const addWorkoutLog = async (log: any) => {
    const { data, error } = await supabase
      .from('workout_logs')
      .insert([log])

    if (error) console.error(error)
    return data
  }

 

  const doStuff = async () => {
  // Example usage
    addWorkoutLog({
      date: '2025-08-31',
      workoutType: 'pushA',
      exercises: [
        { name: 'Bench Press', sets: [{ setNumber: 1, weight: 60, reps: 8 }] }
      ]
    })

    const { data: logs, error } = await supabase
    .from('workout_logs')
    .select('*')
    .order('date', { ascending: true })

    console.log( logs, error);
  }

  return (
    <div className="flex">
      <div className="p-3 w-full">
        <button onClick={doStuff}>asd</button>
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
