import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import TopPart from "./components/TopPart"
import Register from "./components/Register"
import Login from "./components/Login"
import Profile from "./components/Profile"
import AddWorkout from "./components/AddWorkout"
import AddExercise from "./components/AddExercise"
import WorkoutDetail from "./components/WorkoutDetail"


function App() {
  return (
    <div className="App">
      <TopPart />
      <WorkoutDetail />
    </div>
  );
}

export default App;
