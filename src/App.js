import React from "react";
import Header from "./components/Header";
 import Fetch from "./components/Fetch";
import "./css/App.css";

function App() {
    return (
      <div className="App">
        <Header/>
         <div className="container">
            <Fetch /> 
        </div>
      </div>
    ) 
}

export default App;
