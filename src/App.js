import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import TopPart from "./components/TopPart"
import Register from "./components/Register"
import Login from "./components/Login"
import Profile from "./components/Profile"
import AddWorkout from "./components/AddWorkout"


function App() {
  return (
    <div className="App">
      <TopPart />
      <AddWorkout />
    </div>
  );
}

export default App;
