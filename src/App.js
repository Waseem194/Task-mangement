import React from "react";
import Project from "./Components/Project"
import Header from "./Components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
function App() {
  return (
    <div>
      <Header/>
      <Project/>
    </div>
  );
}

export default App;
