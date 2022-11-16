import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import TopPart from "./components/TopPart"
import Register from "./components/Register"
import Login from "./components/Login"
import Profile from "./components/Profile"
import AddWorkout from "./components/AddWorkout"
import AddExercise from "./components/AddExercise"
import WorkoutDetail from "./components/WorkoutDetail"
import Home from "./components/Home"

import{AuthProvider} from "./context/authContext"


function App() {

  const[menuItem, setMenuItem] = React.useState()

  return (
    <div className="App">
      <AuthProvider>
      <TopPart menuItem={(i) => setMenuItem(i)} />

        {menuItem === "home" && <Home />}
        {menuItem === "register" && <Register />}
        {menuItem === "login" && <Login />}
      </AuthProvider>
    </div>
  );
}

export default App;
