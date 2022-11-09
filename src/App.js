import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import TopPart from "./components/TopPart"
import Register from "./components/Register"
import Login from "./components/Login"
import Profile from "./components/Profile"
import AddWorkout from "./components/AddWorkout"
import AddExercise from "./components/AddExercise"


function App() {
  return (
    <div className="App">
      <TopPart />
      <AddExercise />
    </div>
  );
}

export default App;
